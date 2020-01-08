const path = require('path');
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//配置provider
const web3 = new Web3(ganache.provider());
//获取abi和bytecode
const contractPath = path.resolve(__dirname,'../../contract_workflow/compiled/Car.json');
const {interface, bytecode} = require(contractPath);
let accounts;
let contract;
const initialBrand = 'BMW';
//测试
describe('contract',()=>{
    //每次跑单测试需要部署全新的合约实例,起到隔离的作用
    beforeEach(async ()=>{
        accounts = await web3.eth.getAccounts();
        console.log('合约部署账户：'+accounts[0]);
        contract = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({data:bytecode,arguments:[initialBrand]})
            .send({from:accounts[0],gas:'1000000'});
        console.log('合约部署成功：',contract.options.address)
    });
    //编写单元测试
    it('deploy contract', function () {
        assert.ok(contract.options.address);
    });
    it('should has initial brand',async function () {
        const brand = await contract.methods.brand().call();
        assert.equal(brand,initialBrand);
    });
    it('can change the brand',async function () {
        const newBrand = 'Benz';
        await contract.methods.setBrand(newBrand)
            .send({from: accounts[0]})
        const brand = await contract.methods.brand().call();
        assert.equal(brand,newBrand);
    });
})
