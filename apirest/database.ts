import mysql from 'promise-mysql';

import keys from './keys/keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().then((connection) => {
  pool.releaseConnection(connection);
  console.log('MySQL Conectado correctamente...');
});

export default pool;
