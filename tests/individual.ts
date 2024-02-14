import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Individual } from "../target/types/individual";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";

describe("individual", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Individual as Program<Individual>;

  const user = anchor.AnchorProvider.local().wallet;
  // const myAccount = Keypair.generate();
  const myAccount = anchor.AnchorProvider.local().wallet;

  it("Is initialized!", async () => {
    // await requestAirdrop(user.publicKey);

    const tx = await program.methods
      .initialize()
      .accounts({
        myAccount: myAccount.publicKey,
        user: user.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([myAccount, user])
      .rpc();
    console.log("Your transaction signature", tx);
  });
});
