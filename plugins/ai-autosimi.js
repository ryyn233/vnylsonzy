const _0x5369ec=_0x476f;(function(_0x4389c2,_0x4373b8){const _0x311b0a=_0x476f,_0x1f615e=_0x4389c2();while(!![]){try{const _0x5db20f=parseInt(_0x311b0a(0x16a))/0x1*(parseInt(_0x311b0a(0x164))/0x2)+parseInt(_0x311b0a(0x175))/0x3*(-parseInt(_0x311b0a(0x174))/0x4)+parseInt(_0x311b0a(0x153))/0x5*(parseInt(_0x311b0a(0x163))/0x6)+-parseInt(_0x311b0a(0x160))/0x7+parseInt(_0x311b0a(0x16d))/0x8*(parseInt(_0x311b0a(0x16b))/0x9)+-parseInt(_0x311b0a(0x156))/0xa*(parseInt(_0x311b0a(0x165))/0xb)+-parseInt(_0x311b0a(0x15e))/0xc;if(_0x5db20f===_0x4373b8)break;else _0x1f615e['push'](_0x1f615e['shift']());}catch(_0x5c892f){_0x1f615e['push'](_0x1f615e['shift']());}}}(_0x558f,0xeee9b));function hi(){const _0x35e94c=_0x476f;console[_0x35e94c(0x170)](_0x35e94c(0x15a));}function _0x558f(){const _0xb5ce6b=['1146496WYzFEV','*Contoh:*\x20.autosimi\x20*[on/off]*','Maaf\x20kak,\x20ada\x20masalah\x20teknis\x20saat\x20memproses\x20pesanmu.','log','application/x-www-form-urlencoded','[\x20✓\x20]\x20Berhasil\x20mengaktifkan\x20fitur\x20percakapan\x20dengan\x20Simi\x20VynaGPT','error','103276JsrHRs','39uXzQfM','Error\x20in\x20getMessage\x20function:','https://api.simsimi.vn/v2/simtalk','simi','20roUctF','status','command','110aJrKrE','Gagal\x20mendapatkan\x20respons','message','tags','Hello\x20World!','text','success','toLowerCase','7138752fmVBHN','sender','2293235HpPnvX','off','active','1200558jUlmeA','2jcCqDW','940445zYqOnm','autosimi\x20[on/off]','before','fromMe','data','513752jfccTh','117zHJKQi','reply'];_0x558f=function(){return _0xb5ce6b;};return _0x558f();}hi();import _0x19bbdb from'axios';let handler=async(_0x36cdcb,{conn:_0x2e15f0,text:_0x4de6a5})=>{const _0x1c5652=_0x476f;_0x2e15f0[_0x1c5652(0x152)]=_0x2e15f0[_0x1c5652(0x152)]||{};if(!_0x4de6a5)throw _0x1c5652(0x16e);if(_0x4de6a5[_0x1c5652(0x15d)]()==='on')_0x2e15f0['simi'][_0x36cdcb['sender']]={'active':!![]},_0x36cdcb[_0x1c5652(0x16c)](_0x1c5652(0x172));else _0x4de6a5['toLowerCase']()===_0x1c5652(0x161)&&(delete _0x2e15f0['simi'][_0x36cdcb[_0x1c5652(0x15f)]],_0x36cdcb[_0x1c5652(0x16c)]('[\x20✓\x20]\x20Berhasil\x20menonaktifkan\x20fitur\x20percakapan\x20dengan\x20Simi\x20'));};handler[_0x5369ec(0x167)]=async(_0x2fc9e6,{conn:_0x1d05d3})=>{const _0x4e0e9c=_0x5369ec;_0x1d05d3[_0x4e0e9c(0x152)]=_0x1d05d3['simi']||{};if(_0x2fc9e6['isBaileys']&&_0x2fc9e6[_0x4e0e9c(0x168)])return;if(!_0x2fc9e6['text']||!_0x1d05d3[_0x4e0e9c(0x152)][_0x2fc9e6[_0x4e0e9c(0x15f)]]?.[_0x4e0e9c(0x162)])return;if(_0x1d05d3[_0x4e0e9c(0x152)][_0x2fc9e6[_0x4e0e9c(0x15f)]]&&_0x2fc9e6[_0x4e0e9c(0x15b)])try{const _0x2edc5d=await getMessage(_0x2fc9e6[_0x4e0e9c(0x15b)],'id');_0x2fc9e6[_0x4e0e9c(0x16c)](_0x2edc5d);}catch(_0x356ce4){console[_0x4e0e9c(0x173)]('Error\x20fetching\x20data:',_0x356ce4[_0x4e0e9c(0x158)]),_0x2fc9e6[_0x4e0e9c(0x16c)]('Maaf\x20kak,\x20aku\x20nggak\x20paham\x20hehehe...');}},handler[_0x5369ec(0x155)]=['autosimi'],handler[_0x5369ec(0x159)]=['ai'],handler['help']=[_0x5369ec(0x166)];export default handler;function _0x476f(_0x1eb350,_0x7c4cb6){const _0x558fcf=_0x558f();return _0x476f=function(_0x476f40,_0x199c5e){_0x476f40=_0x476f40-0x151;let _0x26cc1f=_0x558fcf[_0x476f40];return _0x26cc1f;},_0x476f(_0x1eb350,_0x7c4cb6);}async function getMessage(_0x3f98fe,_0x35be0c){const _0x3d23c1=_0x5369ec;try{const _0x31e73d=await _0x19bbdb['post'](_0x3d23c1(0x151),new URLSearchParams({'text':_0x3f98fe,'lc':_0x35be0c}),{'headers':{'Content-Type':_0x3d23c1(0x171)}});if(_0x31e73d[_0x3d23c1(0x154)]!==0xc8||!_0x31e73d[_0x3d23c1(0x169)][_0x3d23c1(0x158)])throw new Error(_0x31e73d[_0x3d23c1(0x169)]?.[_0x3d23c1(0x15c)]||_0x3d23c1(0x157));return _0x31e73d[_0x3d23c1(0x169)][_0x3d23c1(0x158)];}catch(_0x3d6fc8){console[_0x3d23c1(0x173)](_0x3d23c1(0x176),_0x3d6fc8[_0x3d23c1(0x158)]);throw new Error(_0x3d23c1(0x16f));}}