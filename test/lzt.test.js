const LZT = artifacts.require("LizzardToken");

/* Configurations */
const TOKEN_NAME = 'LizzardToken';
const TOKEN_SYMBOL = 'LZT';
const TOTAL_SUPPLY = '1000000000';

contract('LZT', ([ programmer, owner ]) => {
  it('Testing contract name and symbol', async () => {E;
    const { name, symbol } = await LZT.deployed();

    const curName = await name.call();
    const curSymbol = await symbol.call();

    assert.equal(TOKEN_NAME, curName.toString(), `${curName} is not correct token name.`);
    assert.equal(TOKEN_SYMBOL, curSymbol.toString(), `${curSymbol} is not correct token symbol.`);
  });

  it('Testing token supplies', async () => {
    const { balanceOf, decimals } = await LZT.deployed();
    const curAmount = web3.utils.fromWei(await balanceOf.call(programmer), 'ether');
    const dc = await decimals.call();
    assert.equal(curAmount, TOTAL_SUPPLY, `Initial supply is incorrect.`);
  });

  it('Testing supply transference', async () => {
    const { balanceOf, transfer } = await LZT.deployed();

    const totalSupply = web3.utils.toWei(TOTAL_SUPPLY, 'ether');
    let programmerAmount = await balanceOf.call(programmer);

    assert.equal(
      totalSupply,
      programmerAmount.toString(),
      `Programmer balance have to be ${web3.utils.fromWei(totalSupply, 'ether')}`
    );

    await transfer.sendTransaction(owner, totalSupply);

    const ownerAmount = await balanceOf.call(owner);
    assert.equal(ownerAmount.toString(), totalSupply, `Balance of owner have to be total supply`);

    programmerAmount = await balanceOf.call(programmer);
    assert.equal(programmerAmount.toString(), 0, `Programmer balance have to be 0`);
  });

  it('Change contract owner', async () => {
    const {
      transferOwnership,
      owner: currentOwner,
    } = await LZT.deployed();

    let cOwner = await currentOwner.call();
    assert.equal(cOwner, programmer, `Programmer have to be the current owner`);

    await transferOwnership.sendTransaction(owner);

    cOwner = await currentOwner.call();
    assert.equal(cOwner, owner, `Owner account have to be owner`);

  });
});
