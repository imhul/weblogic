import Base64 from './decode';

const safe = {
    link: Base64.decode('aHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpL3NpdGV2ZXJpZnk/c2VjcmV0PTZMY0piLU1TQUFBQUFFMXExanJUYXd0b0EwNWdwelNyUHRTY2dIbnomcmVzcG9uc2U9'),
    key: Base64.decode('NkxjSmItTVNBQUFBQUJIVWkzNzJiZGtwdWdLekctNWhpcExYRHRpMg=='),
    mCode: Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t'),
    fCode: Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc='),
    tCode: Base64.decode('aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDc2NDEwNzQ0NzpBQUZrSU9mRWNpTXlQaHgyaUhsMVhoNVF5RUI5cnByQS1WSS9zZW5kTWVzc2FnZT9jaGF0X2lkPTI2OTY1NjYyMiZ0ZXh0PSc='),
    cv: Base64.decode('aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcFVxQmUzdzdpWjRYdk9yUGEyOGc5RlJHZkNoMDdfRnEvdmlldz91c3A9c2hhcmluZw=='),
};

export default safe;