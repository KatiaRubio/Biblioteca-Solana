// No imports needed: web3, anchor, pg and more are globally available

describe("TiendaCosmeticos", () => {

  it("Crear tienda de cosmeticos", async () => {

    const [tiendaPDA] = web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("tienda_cosmeticos"),
        pg.wallet.publicKey.toBuffer()
      ],
      pg.program.programId
    );

    const txHash = await pg.program.methods
      .crearTienda("Beauty Store")
      .accounts({
        owner: pg.wallet.publicKey,
        tienda: tiendaPDA,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();

    console.log(`Transaccion enviada: ${txHash}`);

    await pg.connection.confirmTransaction(txHash);

    console.log("Tienda de cosmeticos creada correctamente");

  });

});
