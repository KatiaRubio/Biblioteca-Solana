// Client

console.log("Direccion de la tienda de cosmeticos:", pg.wallet.publicKey.toString());

const balance = await pg.connection.getBalance(pg.wallet.publicKey);

console.log(`Balance disponible para la tienda de cosmeticos: ${balance / web3.LAMPORTS_PER_SOL} SOL`);
