
const leeksABI =[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getV","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const hpABI = [{"inputs":[{"internalType":"contract Leeks","name":"_contractAddress","type":"address"},{"internalType":"address","name":"_developersAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"lks","type":"uint256"}],"name":"addLuck","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emptyLeeks","outputs":[{"internalType":"address","name":"ads","type":"address"},{"internalType":"uint256","name":"lks","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getLucks","outputs":[{"components":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"internalType":"struct LuckyDogContract.Information[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOpenPool","outputs":[{"components":[{"internalType":"address","name":"luckDog1","type":"address"},{"internalType":"uint256","name":"luckDogReward1","type":"uint256"},{"internalType":"address","name":"luckDog2","type":"address"},{"internalType":"uint256","name":"luckDogReward2","type":"uint256"},{"internalType":"address","name":"luckDog3","type":"address"},{"internalType":"uint256","name":"luckDogReward3","type":"uint256"},{"internalType":"bool","name":"open","type":"bool"},{"internalType":"uint256","name":"timeStart","type":"uint256"},{"internalType":"uint256","name":"openTime","type":"uint256"},{"internalType":"address","name":"openUser","type":"address"},{"internalType":"uint256","name":"openReward","type":"uint256"},{"internalType":"address[]","name":"luckLust","type":"address[]"}],"internalType":"struct LuckyDogContract.LuckyDog[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"luckAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"luckLust","outputs":[{"internalType":"address","name":"luckDog1","type":"address"},{"internalType":"uint256","name":"luckDogReward1","type":"uint256"},{"internalType":"address","name":"luckDog2","type":"address"},{"internalType":"uint256","name":"luckDogReward2","type":"uint256"},{"internalType":"address","name":"luckDog3","type":"address"},{"internalType":"uint256","name":"luckDogReward3","type":"uint256"},{"internalType":"bool","name":"open","type":"bool"},{"internalType":"uint256","name":"timeStart","type":"uint256"},{"internalType":"uint256","name":"openTime","type":"uint256"},{"internalType":"address","name":"openUser","type":"address"},{"internalType":"uint256","name":"openReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lucks","outputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openLuck","outputs":[{"components":[{"internalType":"address","name":"luckDog1","type":"address"},{"internalType":"uint256","name":"luckDogReward1","type":"uint256"},{"internalType":"address","name":"luckDog2","type":"address"},{"internalType":"uint256","name":"luckDogReward2","type":"uint256"},{"internalType":"address","name":"luckDog3","type":"address"},{"internalType":"uint256","name":"luckDogReward3","type":"uint256"},{"internalType":"bool","name":"open","type":"bool"},{"internalType":"uint256","name":"timeStart","type":"uint256"},{"internalType":"uint256","name":"openTime","type":"uint256"},{"internalType":"address","name":"openUser","type":"address"},{"internalType":"uint256","name":"openReward","type":"uint256"},{"internalType":"address[]","name":"luckLust","type":"address[]"}],"internalType":"struct LuckyDogContract.LuckyDog","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_length","type":"uint256"}],"name":"rand","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityAddress","type":"address"}],"name":"setCommunityAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"_suspended","type":"bool"}],"name":"setSuspended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
// https://cdn.jsdelivr.net/gh/EcologicalParadise/burnGame/src/img/bg-m.png
function formatAddress(_address) {
    return  _address.substring(0,4) + '*****' + _address.substring(_address.length - 4, _address.length)
};

const sc = '1000000000000000000';
function formatCoin(_num, _t) {
    let n = new BigNumber(_num);
    return _t ?  n.multipliedBy(sc) : n.dividedBy(sc);
}
function formatTime(_time) {
    return _time < 10 ? `0${_time}` : _time;
}

let isScrollStart = false;

function scrollStart(arr = []) {
    isScrollStart = true;
    let settings = {
    speeds: 25, //滚动的速度,单位ms
    isPause: true, //滚动后每个消息是否需要暂停，true和false,
    isHover:true, //鼠标悬停是否需要暂停
    };

    let  ul = document.getElementById("scroll-list");
    arr.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
    });
    let currentTop = parseInt(window.getComputedStyle(ul).top);

    function run() {
    currentTop--;
    ul.style.top = currentTop + "px";
    if (currentTop == (arr.length - 1) * -50) {
        let li = document.createElement("li");
        li.innerHTML = arr[0];
        ul.appendChild(li);
    };
    if (currentTop == arr.length * -50) {
        currentTop = 0;
        ul.style.top = currentTop + "px";
        let li = document.querySelectorAll("li");
        ul.removeChild(li[li.length - 1]);
    }
    if (settings.isPause) {
        if (currentTop % 50 == 0) {
        clearInterval(timer);
        setTimeout(function () {
            timer = setInterval(run, settings.speeds);
        }, 3000);
        }
    }
    }
    let timer = setInterval(run, settings.speeds);

    ul.onmouseover = function () {
        if(settings.isHover){
            clearInterval(timer);
        }
    };
    ul.onmouseleave = function () {
        if(settings.isHover){
            timer = setInterval(run, settings.speeds);
        }
    };

}


function openTime() {
    let d = new Date();
    let type = false;
    let str = d.getTime().toString();
    let time = parseInt(str.slice(0, str.length - 3));
    // let time = 1624536000; // todo
    let num;

    
    let t = time % 86400;
    if (t < 39600) {
        num = 39600 - t;
    } else if (t > 41400) {
        num = 39600 - t + 86400;
    } else {
        type = true;
    }
    
    return {
        type,
        num,
        data: type ? ['00', '00', '00'] : [formatTime(parseInt(num / 3600)), formatTime(parseInt(num % 3600 / 60)), formatTime(parseInt(num % 3600 % 60))]
    };
};


(async function () {
    let leeksContractAddress = "0x526fd564B1E04d407A5C90fBE29e8eB28557Bf57";
    let hpContractAddress = "0x9a1da1f8E3e2b9F4E217141b0aD23190238ba3B6";
    const web3 = new Web3();

    function authorization() {
        return new Promise(async function (resove, reject) {
            setTimeout(async () => {
                if (window.ethereum) {
                    try {
                        await window.ethereum.enable().then(function (accounts) {
                            web3.setProvider(window.ethereum);
                            web3.eth.defaultAccount = accounts[0];
                            resove({
                                type: 0,
                                value: accounts[0]
                            })
                        });
                    } catch (error) {
                        resove({
                            type: 2,
                        })
                    }
                }
            }, 200);
        })
    }

    let data = await authorization();
    let allowance = false;
    let openPoolList = [];
    const address = $('#my-address');
    const opt = $('#open-time');
    const myCount = $('#my-count');
    const myToken = $('#my-token');
    const allLeeks = $('#all-leeks');
    const estructionLeeks = $('#estruction-leeks');
    const bt1 = $('#btn-1');
    const bt2 = $('#btn-2');
    const bt5 = $('#btn-5');
    const bt6 = $('#btn-6');
    const bt7 = $('#btn-7');
    const mask = $('#mask');
    const bd = $('body');
    const close = $('#btn-close');
    const maxToken = $('#max-token');
    const addMax = $('#add-max');
    const addInput = $('#add-input');
    const confirmExchange = $('#confirm-exchange');
    const destructionTip = $('#destruction-tip');
    const destructionTip1 = $('#destruction-tip1');
    const addDestruction = $('#add-destruction');
    
    const loading = $('#loading');
    const loadingIng = $('#loading-ing');
    const loadingSuccess = $('#loading-success');
    const loadingErr = $('#loading-err');
    const loadingBtSuc = $('#loading-bt-suc');
    const loadingBtErr = $('#loading-bt-err');
    const luckOpen = $('#luck-open');
    const luckOpenMes = $('#luck-open-mes');
    const luckClose = $('#luck-close');
    const luckOpenNone = $('#luck-open-none');
    const luckOpenNoneMes = $('#luck-open-none-mes');
    const luckCloseNone = $('#luck-close-none');
    const luckOpenOther = $('#luck-open-other');
    const historyDogBox = $('#history-dog-box');
    const gameRulesBtn = $('#game-rules-btn');

    let balance = 0;
    let tokenMaxNum = 0;
    const LeeksContract = new web3.eth.Contract(leeksABI, leeksContractAddress);
    const hpContract = new web3.eth.Contract(hpABI, hpContractAddress);


    setInterval(() => {
        let {type, data, num} = openTime();
        
        opt.html(`
        <span>${data[0]}</span>
        <span>:</span>
        <span>${data[1]}</span>
        <span>:</span>
        <span>${data[2]}</span>
        `);


        if (allowance) {
            bt2.hide();
            if (type) { 
                let {timeStart} = openPoolList[openPoolList.length -1];
                // timeStart = '1624273868'; // todo
                let d = new Date()
                let str = d.getTime().toString();
                let time = parseInt(str.slice(0, str.length - 3));
                let mx = time - parseInt(timeStart);
                if (mx < 3600) {
                    bt1.hide();
                    bt6.hide();
                    bt5.hide();
                    bt2.hide();
                    bt7.show();
                } else {
                    bt1.hide();
                    bt5.show();
                    bt6.hide();
                    bt7.hide();
                }
            } else {
                if (num > 0 && num < 300) {
                    bt1.hide();
                    bt5.hide();
                    bt6.show();
                } else {
                    bt1.show();
                    bt5.hide();
                    bt6.hide();
                }
            }
        } else {
            bt2.show();
            bt1.hide();
            bt5.hide();
            bt6.hide();
        }
        
        // if (type) {
        //     bt1.hide();
        //     bt5.show();
        //     bt6.hide();
        // } else {
        //     if (num > 0 && num < 300) {
        //         bt1.hide();
        //         bt5.hide();
        //         bt6.show();
        //     }
        // }
    }, 100);
    
    if (data.type === 0) {
        let fromAddr = data.value;
        address.text(formatAddress(fromAddr));
        
        function getBalance(_fromAddr) {
            LeeksContract.methods.balanceOf(_fromAddr).call({from: _fromAddr}).then(function (data) {
                let _c = formatCoin(data).toString();
                myCount.text(parseInt(_c));
                balance = _c;
            });
        };
        getBalance(fromAddr);

        function getLucks(_fromAddr) {
            hpContract.methods.getLucks().call({from: _fromAddr}).then(function (data) {
                let _count = 0;
                let _myCount = 0;
                let dh = {};

                data.forEach((_v) => {
                    let ads = _v.addres.toLocaleUpperCase();
                    if (ads === _fromAddr.toLocaleUpperCase()) {
                        _myCount ++;
                    }
                    _count += parseInt( _v.voteCount);
                    if (dh[ads] !== undefined) {
                        dh[ads].push(_v);
                    } else {
                        dh[ads] = [_v];
                    }
                });
                myToken.text(_myCount);
                allLeeks.text(_count);
                estructionLeeks.text(_count * 0.1);
                let newDh = [];
                for (let key in dh) {
                    newDh.push({
                        ads: key,
                        data: dh[key],
                    });
                }
         

                let dharr = newDh.sort((a,b) => {
                    return b.data.length - a.data.length;
                }).slice(0, 5).map((_data) => {
                    let {ads, data} = _data;
                    return `${formatAddress(ads)}拥有${data.length}个令牌`
                });
                if (isScrollStart === false) {
                    scrollStart(dharr);
                }
            });
        };
        getLucks(fromAddr);

        // 获取最新奖池
        async function getOpenPool(_fromAddr) {
            hpContract.methods.getOpenPool().call({from: _fromAddr}).then(function (data) {
                openPoolList = data;
                if (data.length  > 1) {
                    let str = `<div class='activity-name1'>历史幸运儿</div>`;
                    data = Array.from(data);
                    data.reverse();
                    showData = data.slice(1, 6);
                    showData.forEach((_v, i) =>{
                        let {
                            luckDog1,
                            luckDog2,
                            luckDog3,
                            luckDogReward1,
                            luckDogReward2,
                            luckDogReward3,
                            openReward,
                            openUser,
                            luckLust
                        } = _v;

                        let tr = '';
                        try {
                           luckLust.forEach((_v) => {
                               tr += `
                               <div>
                                    <span>${formatAddress(_v)}</span>
                                    <span>${openReward}&nbsp;leeks</span>
                                </div>
                               `
                            })
                        } catch(err) {
                            
                        }

                        str += `
                        <div class='history-dog-item'>
                        <div class='history-num'>第${data.length - i - 1}期</div>
                        <div>
                             <div>
                                 <span>抢头奖：</span>
                                 <span>${formatAddress(openUser)}</span>
                                 <span>${openReward}&nbsp;leeks</span>
                             </div>
                            <div>
                                 <span>韭神：</span>
                                 <span>${formatAddress(luckDog1)}</span>
                                 <span>${luckDogReward1}&nbsp;leeks</span>
                            </div>
                            <div>
                                 <span>韭仙：</span>
                                 <span>${formatAddress(luckDog2)}</span>
                                 <span>${luckDogReward2}&nbsp;leeks</span>
                             </div>
                             <div>
                                 <span>韭鬼：</span>
                                 <span>${formatAddress(luckDog3)}</span>
                                 <span>${luckDogReward3}&nbsp;leeks</span>
                             </div>
                             <p class='history-dog-luckname'>幸运奖励</p>
                            ${tr}
                            </div>
                        </div>
                         `
                        
                         
                    });
                    historyDogBox.html(str);
                }
            });
        };
        getOpenPool(fromAddr);

        // 检查授权
        LeeksContract.methods.allowance(fromAddr, hpContractAddress).call({from: fromAddr}).then(function (data) {
            let _v = formatCoin(data);
            if (_v < 100000000) {
                allowance = false;
            } else {
                allowance = true;
            }
        });

        bt2.click(() => {
            LeeksContract.methods.approve(hpContractAddress, '10000000000000000000000000000').send({from: fromAddr}).then(function (data) {
                allowance = true;
            });
        });
        
        bt1.click(() => {
            mask.css('display', 'flex');
            bd.addClass('bd-hide');
            let _c = new BigNumber(balance).dividedBy(1000);
            let _m = parseInt(_c.toNumber());
            maxToken.text(_m);
            tokenMaxNum = _m;
        }); 

        // 开奖
        bt5.click(() => {
            addDestruction.hide();
            loadingIng.show();
            mask.css('display', 'flex');
            loading.show();
            hpContract.methods.openLuck().send({from: fromAddr}).then(function (data) {
                hpContract.methods.getOpenPool().call({from: fromAddr}).then(function (data) {
                    let {
                        luckDog1,
                        luckDog2,
                        luckDog3,
                        luckDogReward1,
                        luckDogReward2,
                        luckDogReward3,
                        openReward,
                        openUser,
                    } = data[data.length - 2];
                    loading.addClass('luck-open-box');
                    loadingIng.hide();
                    luckOpenMes.html(`恭喜你，抢到头奖!</br>获取${openReward}leeks`);
                    luckOpen.css('display', 'flex');
                    luckOpenOther.html(`
                    第1名：${formatAddress(luckDog1)} 获取 ${luckDogReward1}leeks
                    <br>
                    第2名：${formatAddress(luckDog2)} 获取 ${luckDogReward2}leeks
                    <br>
                    第3名：${formatAddress(luckDog3)} 获取 ${luckDogReward3}leeks
                    `);
                });
                getOpenPool(fromAddr);
                getBalance(fromAddr);
                getLucks(fromAddr);
            }).catch((data) => {
               loadingIng.hide();
               luckOpenNoneMes.html('真遗憾，下次再接再厉！');
               luckOpenNone.css('display', 'flex');
               getOpenPool(fromAddr);
               getBalance(fromAddr);
               getLucks(fromAddr);
            });
        }); 

        // 关闭抽奖结果
        luckClose.click(() => {
            mask.hide();
            addDestruction.show();
            loadingIng.show();
            luckOpen.hide();
            luckOpenMes.html('');
            loading.hide();
            loading.removeClass('luck-open-box');
        });
        luckCloseNone.click(() => {
            mask.hide();
            addDestruction.show();
            loadingIng.show();
            luckOpenNone.hide();
            luckOpenNoneMes.html('');
            loading.hide();
            loading.removeClass('luck-open-box');
        });


        close.click(() => {
            mask.hide();
            bd.removeClass('bd-hide');
        });  
        
        addMax.click(() => {
            addInput.val(tokenMaxNum);
        });    
  
        addInput.on('input', function(params) {
            destructionTip.hide();
        });
        
        confirmExchange.click(() => {
            let _v = addInput.val();
            if ((/(^[1-9]\d*$)/.test(_v))) {
            let _v = addInput.val();
                _v = Number(_v);
                if (_v <= tokenMaxNum) {
                // if (true) {
                    addDestruction.hide();
                    loading.show();
                    hpContract.methods.addLuck(_v).send({from: fromAddr}).then((data) => {
                        loadingIng.hide();
                        loadingSuccess.css('display', 'flex');
                        getBalance(fromAddr);
                        getLucks(fromAddr);
                    }).catch((data) => {
                        loadingIng.hide();
                        loading.show();
                        loadingErr.css('display', 'flex');
                    });
                   
                } else {
                    destructionTip.text('请输入正确的数量').show();
                }
            } else {
                destructionTip.text('请输入正确的数量').show();
            }
        });

        loadingBtSuc.click(function() {
            close.click();
            addDestruction.show();
            loading.hide();
            loadingSuccess.hide();
            loadingIng.show();
        });

        loadingBtErr.click(function() {
            loading.hide();
            addDestruction.show();
            loadingSuccess.hide();
            loadingErr.hide();
            loadingIng.show();
        });

        gameRulesBtn.click(function() {
            $('#game-rules-tip').toggle();
        })
    }

})();
