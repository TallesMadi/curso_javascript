function retornaHora(data) {
    if (data && !(data instanceof Date)) throw new TypeError('Esperando intância de Date.');
    if (!data) data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};

try {
    console.log(retornaHora(new Date('01-01-1970 12:30:00')));
} catch(e) {
    // tratar erro
} finally {
    console.log('Tenha um bom dia!')
}