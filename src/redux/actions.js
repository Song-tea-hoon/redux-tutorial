// 단순 Action객체에서 Action creater(function)로 변환
// 단순 객체를 리턴할때보다 확장성이 더욱 올라간다.
export const updateUser = (name) => ({
  type: 'updateUser',
  payload: {user: name}
});