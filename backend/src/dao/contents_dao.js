import db from '../infra/db.js';

class contents_dao{
    static list(){
        const query = 'select * from produtos';
        return new Promise((resolve, reject) => {
            db.all(query, (error, rows) => {
                if (error) {
                    reject(error);
                }

                resolve(rows);
            });
        });
    };

    static insert(produtos){
        const query = 'insert into produtos (nome, marca_propria, descricao, preco) values (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [produtos.nome, produtos.marca_propria, produtos.descricao, produtos.preco], function (error) {
                if (error) {
                    reject({
                        msg: 'Erro',
                        erro: error
                    });
                };

                resolve({
                    msg: 'Inserido'
                 });
            });
        });
    };

    static delete(id){
        const query = 'delete from produtos where id = ?';
        return new Promise((resolve, reject) => {
            db.run(query, [id]);
        })
    }

    static update(id, produtos){
        const query = 'update conteudos set nome = ?, marca_propria = ?, descricao = ?, preco = ? where id = ?';
        return new Promise((resolve, reject) => {
            db.run(query, [produtos.nome, produtos.marca_propria, produtos.descricao, produtos.preco, id]);
        });
    };
};

export default contents_dao;
