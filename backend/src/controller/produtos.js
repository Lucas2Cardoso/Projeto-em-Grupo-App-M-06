import { openDb } from '../configdb.js';

export async function create_table(){
    openDb().then(db => {
        db.exec('create table if not exists Produtos(id integer primary key, nome varchar(255), valor int)')
    })
}

export async function insert(produtos){
    openDb().then(db => {
        db.run('insert into produtos(nome, valor) values (?, ?)', [produtos.nome, produtos.valor]);
    })
}

export async function update(produtos){
    openDb().then(db => {
        db.run('update produtos set nome = ?, valor = ? where id = ?', [produtos.nome, produtos.valor, produtos.id]);
    })
}

export async function select(){
    return openDb().then(db => {
        return db.all('select * from produtos')
        .then(res => res)
    })
}

export async function select_by_id(id){
    return openDb().then(db => {
        return db.all('select * from produtos where id = ?', [id])
        .then(res => res)
    })
}