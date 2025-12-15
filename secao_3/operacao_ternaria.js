// (condicao) ? 'valor verdadeiro' : 'valor falso';
const UserPontuation = 999;
const UserLevel = UserPontuation >= 100 ? 'Usuário VIP' : 'Usuário Normal';
console.log(UserLevel);

const UserColor = null;
const DefaultColor = UserColor || 'Preto';

console.log(DefaultColor);