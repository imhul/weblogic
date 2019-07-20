export const trelloApikey = '593b9067b2f5e38b3040aa57efd55e1d';
export const trelloToken = '972f2c7570cee0ac0a9bb6c92c839c3d78ae3cb64905b120a27b6676a6a845c7';
export const trello = window.Trello;
export const trelloConfig = {
    app_title: 'Multiboard',
    api_key: trelloApikey,
    //   google_analytics_property: 'UA-12345678-9',
    company_member: 'reduxdev',
    preferred_members: 'reduxdev',
    lists: [ 'backlog', 'in progress', 'testing', 'done' ],
    boards: [
        {
        shortcut: 'OQmumoCx',
        name: 'weblogic',
        id: '5c18dc2bc991157cd4883254', // optional: only required when board is public but user should see it
        estimates_with_round_brackets: true,
        estimates_with_square_brackets: true,
        },
    ],
};

export const isTrelloAvailable = () => {
  if (trello) {
    console.info("trello is OK", trello);
    return true
  }
  return false
};

export const getQuery = (query, resolve, reject) => {
  if (!isTrelloAvailable()) {
    reject(new Error('Trello is not defined'))
    return
  }

  trello.get(
    query,
    result => resolve(result),
    errorMsg => {
      let error = errorMsg
      if (errorMsg.status === 401) {
        // Trello Response Code 401: eg. when api_key changed but old one is still
        // present in the localStorage
        error = {
          responseText: errorMsg.responseText,
          status: errorMsg.status,
          statusText: errorMsg.statusText,
        }
      }
      reject(error)
    },
  )
};

export const authenticateUser = () =>
  new Promise((resolve, reject) => {
    if (!isTrelloAvailable()) {
      reject(new Error('Trello is not defined', resolve))
    }
    trello.authorize({
      name: trelloConfig.app_title || 'multiboard',
      type: 'redirect',
      scope: {
        read: true,
        write: false,
      },
      expiration: 'never',
      response_type: 'token',
      success: () => resolve(true),
      error: () => reject(new Error('Authentication failed')),
    })
  });

export const getMeBoards = () =>
  new Promise((resolve, reject) => getQuery('/member/me/boards?fields=id,name', resolve, reject));

export const getBoard = boardId =>
  new Promise((resolve, reject) => getQuery(`/boards/${boardId}?fields=id,name`, resolve, reject));

export const getLists = boardId =>
  new Promise((resolve, reject) =>
    getQuery(`/boards/${boardId}/lists?fields=id,idBoard,name`, resolve, reject),
  );

export const getCards = listId =>
  new Promise((resolve, reject) =>
    getQuery(
      `/lists/${listId}/cards?members=true&member_fields=avatarHash,fullName,initials,username&fields=badges,labels,name,id,idBoard,idList,idMembers,shortUrl`,
      resolve,
      reject,
    ),
  );

export const getMember = memberId =>
  new Promise((resolve, reject) =>
    getQuery(`/members/${memberId}?fields=username,avatarHash,fullName,initials`, resolve, reject),
  );

export default {
  authenticateUser,
  getCards,
  getBoard,
  getLists,
  getMeBoards,
  getMember,
  getQuery,
  isTrelloAvailable,
  trello,
};
