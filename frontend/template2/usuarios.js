
function listar(callback) {
    var sql = "SELECT * FROM usuarios";
    select(sql, function(ret){
        callback(ret);
    })    
}

function listsearch(callback) {
    /*
    var sql = "SELECT id AS id, nm_nome AS Nome, nm_rg AS RG, nm_cpf AS CPF, nm_email AS Email, ";
    sql += " nm_telefone AS Telefone";
    sql += " FROM usuarios ORDER BY nm_nome";
*/
    var sql = "SELECT id AS id, nm_nome AS NOME, nm_login AS LOGIN, nm_tipousuario AS TIPO  FROM usuarios ";

    select(sql, function(ret){
        callback(ret);
    })    
}


function search(table, id, callback) {    
    var sql = "SELECT * ";
    sql += " FROM " + table + " WHERE id=" + id;
    select(sql, function(ret){
        callback(ret);
    })    
}


function gravar(table, parametros, callback) {
    
    executeObj(table,parametros, function(ret){
        callback(ret);
    })
      
}

function ondelete(table, id,callback){
    var sql = "DELETE FROM " + table + " WHERE id=" + id;
    execute(sql, function(ret){
        callback(ret);
    })    
}