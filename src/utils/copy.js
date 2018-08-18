import Base64 from './decode';
import './clipboard';

const clipboardMail = new Clipboard('#copy-mail', {
  text: function () {
    return Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t');
  }
});
const clipboardPhone = new Clipboard('#copy-phone', {
  text: function () {
    return Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc=');
  }
});

// export { clipboardMail, clipboardPhone };