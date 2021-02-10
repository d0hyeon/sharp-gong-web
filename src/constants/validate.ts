import { REGEXP_PASSWORD } from "./pattern";

interface Validate {
  message: string;
  pattern?: RegExp;
  required?: boolean;
}

export const ID_RULES: Validate[] = [
  {required: true, message: '아이디를 입력해주세요.'}
]

export const PASSWORD_RULES: Validate[] = [
  {required: true, message: '비밀번호를 입력해주세요.' },
  {pattern: REGEXP_PASSWORD, message: '영문자, 숫자를 포함하여 8글자 이상 입력해주세요.'}
]