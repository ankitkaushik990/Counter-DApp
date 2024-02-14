use anchor_lang::prelude::*;

declare_id!("7V8ei4vXkD39Tuc3BPwdqhzYgHzQ3wjns35xGD9Tevm4");

#[program]
pub mod individual {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}



#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub my_account: Account<'info, MyAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}



#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>,
}


#[account]
pub struct MyAccount{
    data:u64,
}