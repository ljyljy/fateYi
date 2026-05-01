import { TRIGRAMS } from './trigrams.js'

const H = (num, name, symbol, upper, lower, judgment, image, interp, lines) => ({
  id: num,
  name,
  symbol,
  upperTrigram: upper,
  lowerTrigram: lower,
  number: num,
  judgment,
  image,
  interpretation: interp,
  lines
})

export const HEXAGRAMS = [
  H(1, '乾为天', '䷀', 'qian', 'qian',
    '元亨利贞。',
    '元亨，利贞。大哉乾元，万物资始，乃统天。云行雨施，品物流形。',
    {
      summary: '此卦大吉，为纯阳之卦，象征天行健，君子以自强不息。刚健进取之象，万事亨通。',
      career: '事业大展宏图，宜积极进取，把握机遇。领导力强，可开创局面。',
      relationship: '感情方面阳刚之气旺盛，宜主动追求，但需注意刚柔并济。',
      health: '健康良好，精力充沛。注意头部、肺部保养。',
      wealth: '财运亨通，正财偏财皆有利。投资宜果断。'
    },
    [
      { position: 1, name: '初九', text: '潜龙勿用。', interpretation: '龙潜于渊，时机未到，宜韬光养晦，不可轻举妄动。' },
      { position: 2, name: '九二', text: '见龙在田，利见大人。', interpretation: '龙现于田野，初露锋芒，宜寻求贵人相助，展现才华。' },
      { position: 3, name: '九三', text: '君子终日乾乾，夕惕若厉，无咎。', interpretation: '日夜勤勉不懈，保持警惕，虽处危境亦可无灾祸。' },
      { position: 4, name: '九四', text: '或跃在渊，无咎。', interpretation: '进退自如，或腾跃或深潜，审时度势则无咎。' },
      { position: 5, name: '九五', text: '飞龙在天，利见大人。', interpretation: '龙飞于天，大展宏图之时，德位相配，大有可为。' },
      { position: 6, name: '上九', text: '亢龙有悔。', interpretation: '龙飞过高而致悔，物极必反，当知进退盈虚之理。' }
    ]
  ),
  H(2, '坤为地', '䷁', 'kun', 'kun',
    '元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞吉。',
    '至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。',
    {
      summary: '此卦主柔顺承载之德，象征大地厚德载物。宜守柔持静，顺势而为。',
      career: '事业宜稳中求进，以柔克刚，注重积累与基础建设。',
      relationship: '感情宜温柔体贴，包容对方，以和为贵。',
      health: '注意脾胃消化系统，宜调养身心，避免过度操劳。',
      wealth: '财运平稳，宜稳健理财，不宜冒险投机。'
    },
    [
      { position: 1, name: '初六', text: '履霜坚冰至。', interpretation: '踏霜而知冰将至，见微知著，防患于未然。' },
      { position: 2, name: '六二', text: '直方大不习无不利。', interpretation: '正直方正广大，不学习亦无所不利，天赋之美德。' },
      { position: 3, name: '六三', text: '含章可贞，或从王事，无成有终。', interpretation: '内含美质，可守正道。从事王事虽无功亦有善终。' },
      { position: 4, name: '六四', text: '括囊无咎无誉。', interpretation: '束紧囊口，谨言慎行，虽无赞誉亦无过错。' },
      { position: 5, name: '六五', text: '黄裳元吉。', interpretation: '身着黄裳，居尊位而守中道，大吉大利。' },
      { position: 6, name: '上六', text: '龙战于野，其血玄黄。', interpretation: '二龙战于野外，血流玄黄，阴阳相争之象。' }
    ]
  ),
  H(3, '水雷屯', '䷂', 'kan', 'zhen',
    '元亨利贞，勿用有攸往，利建侯。',
    '屯，刚柔始交而难生。',
    {
      summary: '此卦象征事物初创之艰难，如草木萌芽破土而出。虽有困难但前景光明。',
      career: '创业初期困难重重，需坚韧不拔。宜建立根基，寻求盟友。',
      relationship: '感情处于萌芽阶段，需要耐心培养，不宜急躁。',
      health: '身体可能有小恙，宜注意休息调理。',
      wealth: '财务紧张，需谨慎规划，不宜大额支出。'
    },
    [
      { position: 1, name: '初九', text: '磐桓，利居贞，利建侯。', interpretation: '徘徊不前，宜安居守正，利于建立基业。' },
      { position: 2, name: '六二', text: '屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。', interpretation: '进退两难，骑马盘旋。非敌寇而是求婚，女子守贞十年才嫁。' },
      { position: 3, name: '六三', text: '即鹿无虞，惟入于林中，君子不如舍，往吝。', interpretation: '追鹿无向导，入林迷失。君子不如放弃，前往会有遗憾。' },
      { position: 4, name: '六四', text: '乘马班如，求婚媾往吉，无不利。', interpretation: '骑马盘旋，求婚前往吉利，无所不利。' },
      { position: 5, name: '九五', text: '屯其膏，小贞吉，大贞凶。', interpretation: '恩泽被阻隔，小事守正则吉，大事守正反凶。' },
      { position: 6, name: '上六', text: '乘马班如，泣血涟如。', interpretation: '骑马盘旋哭泣，血泪涟涟，穷途末路之象。' }
    ]
  ),
  H(4, '山水蒙', '䷃', 'gen', 'kan',
    '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
    '蒙以养正，圣功也。',
    {
      summary: '此卦象征启蒙教育之象。如山中出泉，需引导疏通。宜虚心求学，循序渐进。',
      career: '学习成长阶段，宜拜师学艺，谦虚求教。不宜急于求成。',
      relationship: '感情需互相了解磨合，如师生般共同成长。',
      health: '注意心理健康，保持好奇心和学习热情。',
     财富: '知识就是财富，宜投资自身能力提升。'
    },
    [
      { position: 1, name: '初六', text: '发蒙，利用刑人，用说桎梏，以往吝。', interpretation: '开启蒙昧，宜用法度约束，解脱枷锁锁链，前往有困难。' },
      { position: 2, name: '九二', text: '包蒙吉，纳妇吉，子克家。', interpretation: '包容蒙昧者吉祥，娶妻吉祥，子能治家。' },
      { position: 3, name: '六三', text: '勿用取女，见金夫不有躬，无攸利。', interpretation: '不宜娶此女，见到有钱男子便失身，无所利益。' },
      { position: 4, name: '六四', text: '困蒙，吝。', interpretation: '困于蒙昧之中，有所憾惜。' },
      { position: 5, name: '六五', text: '童蒙，吉。', interpretation: '童稚蒙昧，谦逊好学，吉祥。' },
      { position: 6, name: '上九', text: '击蒙，不利为寇，利御寇。', interpretation: '猛击蒙昧，不利于做盗贼，有利于抵御盗贼。' }
    ]
  ),
  H(5, '水天需', '䷄', 'kan', 'qian',
    '有孚，光亨贞吉，利涉大川。',
    '需，须也，险在前也。刚健而不陷。',
    {
      summary: '此卦象征等待时机之象。云上于天，待时降雨。宜耐心等待，蓄势待发。',
      career: '事业需等待良机，不宜急躁冒进。做好充分准备。',
      relationship: '感情需要时间培养，耐心等待缘分成熟。',
      health: '养生之道在于顺应时节，注意饮食起居规律。',
      wealth: '投资需耐心等待回报，不宜频繁操作。'
    },
    [
      { position: 1, name: '初九', text: '需于郊，利用恒，无咎。', interpretation: '在郊外等待，宜持之以恒，无灾祸。' },
      { position: 2, name: '九二', text: '需于沙，小有言，终吉。', interpretation: '在沙滩等待，稍有言语争执，最终吉祥。' },
      { position: 3, name: '九三', text: '需于泥，致寇至。', interpretation: '在泥沼等待，招致强盗到来。' },
      { position: 4, name: '六四', text: '需于血，出自穴。', interpretation: '在血泊中等待，从洞穴中脱出。' },
      { position: 5, name: '九五', text: '需于酒食，贞吉。', interpretation: '在酒食宴乐中等待，守正吉祥。' },
      { position: 6, name: '上六', text: '入于穴，有不速之客三人来，敬之终吉。', interpretation: '进入洞穴，有不速之客三人来，恭敬对待最终吉祥。' }
    ]
  ),
  H(6, '天水讼', '䷅', 'qian', 'kan',
    '有孚窒惕，中吉，终凶。利见大人，不利涉大川。',
    '讼，上刚下险，险而健，讼。',
    {
      summary: '此卦象征争讼之象。天与水违行，意见相左。宜息事宁人，避免争端。',
      career: '职场易生纠纷，宜沟通协调，避免正面冲突。',
      relationship: '感情易有误解争吵，需坦诚沟通化解矛盾。',
      health: '情绪波动影响健康，宜保持平和心态。',
      wealth: '财务纠纷风险高，合同文书务必谨慎。'
    },
    [
      { position: 1, name: '初六', text: '不永所事，小有言，终吉。', interpretation: '不将争端持久化，稍有口舌，最终吉祥。' },
      { position: 2, name: '九二', text: '不克讼，归而逋其邑人三百户，无眚。', interpretation: '争讼不胜，逃回封邑三百户人家，无灾祸。' },
      { position: 3, name: '六三', text: '食旧德，贞厉，终吉。或从王事，无成。', interpretation: '享用旧有恩德，守正虽有危险最终吉祥。' },
      { position: 4, name: '九四', text: '不克讼，复即命渝，安贞吉。', interpretation: '争讼不胜，回头改变初衷，安守正道吉祥。' },
      { position: 5, name: '九五', text: '讼元吉。', interpretation: '争讼大吉，公正裁决。' },
      { position: 6, name: '上九', text: '或锡之鞶带，终朝三褫之。', interpretation: '或许获赐腰带，一天之内三次被剥夺。' }
    ]
  ),
  H(7, '地水师', '䷆', 'kun', 'kan',
    '贞丈人吉，无咎。',
    '师，众也。贞正也能众服。',
    {
      summary: '此卦象征军队行师之象。地中有水，容民畜众。宜纪律严明，统一指挥。',
      career: '团队管理重要时期，需明确分工，严明纪律。',
      relationship: '感情需有共同目标，相互支持配合。',
      health: '注意群体性健康问题，预防传染病。',
      wealth: '集体投资需选好领队，跟随明主。'
    },
    [
      { position: 1, name: '初六', text: '师出以律，否臧凶。', interpretation: '军队出征要有纪律，否则无论善恶都凶险。' },
      { position: 2, name: '九二', text: '在师中吉，无咎，王三锡命。', interpretation: '在军中统帅吉祥，无灾祸，君王三次赐命嘉奖。' },
      { position: 3, name: '六三', text: '师或舆尸，凶。', interpretation: '军队可能车载尸体而归，凶险。' },
      { position: 4, name: '六四', text: '师左次，无咎。', interpretation: '军队驻扎左侧撤退，无灾祸。' },
      { position: 5, name: '六五', text: '田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。', interpretation: '田野有猎物，宜捕捉声讨。长子统军，弟子败绩。' },
      { position: 6, name: '上六', text: '大君有命，开国承家，小人勿用。', interpretation: '国君颁布命令，开国承家，不可任用小人。' }
    ]
  ),
  H(8, '水地比', '䷇', 'kan', 'kun',
    '吉。原筮元永贞，无咎。不宁方来，后夫凶。',
    '比，辅也，下顺从也。',
    {
      summary: '此卦象征亲附团结之象。地上有水，相亲相助。宜广结善缘，和睦共处。',
      career: '事业宜合作共赢，建立良好人际关系网络。',
      relationship: '感情和谐美满，彼此亲近依赖。',
      health: '身心健康，人际关系良好有益健康。',
      wealth: '合作带来财富，合伙经营有利。'
    },
    [
      { position: 1, name: '初六', text: '有孚比之，无咎。有孚盈缶，终来有它吉。', interpretation: '诚信亲附他人，无灾祸。诚信充盈如缶，终有意外之吉。' },
      { position: 2, name: '六二', text: '比之自内，贞吉。', interpretation: '发自内心亲附，守正吉祥。' },
      { position: 3, name: '六三', text: '比之匪人。', interpretation: '所亲附的人不正派。' },
      { position: 4, name: '六四', text: '外比之，贞吉。', interpretation: '向外亲附贤者，守正吉祥。' },
      { position: 5, name: '九五', text: '显比，王用三驱，失前禽，邑人不诫，吉。', interpretation: '光明正大地亲附，君王三面围猎，邑人不警觉，吉祥。' },
      { position: 6, name: '上六', text: '比之无首，凶。', interpretation: '亲附没有首领，凶险。' }
    ]
  ),
  H(9, '风天小畜', '䷈', 'xun', 'qian',
    '亨。密云不雨，自我西郊。',
    '小畜，柔得位而上下应之。',
    {
      summary: '此卦象征小有积蓄之象。风行天上，密云未雨。宜积蓄力量，等待时机。',
      career: '事业处于积累期，小有成就但尚未大成。',
      relationship: '感情稳定发展，细水长流。',
      health: '注意小病早治，预防为主。',
      wealth: '小额储蓄积累，不宜大手笔投资。'
    },
    [
      { position: 1, name: '初九', text: '复自道，何其咎？吉。', interpretation: '回到自己道路上来，有什么灾祸？吉祥。' },
      { position: 2, name: '九二', text: '牵复，吉。', interpretation: '被牵连返回，吉祥。' },
      { position: 3, name: '九三', text: '舆说辐，夫妻反目。', interpretation: '车轮脱落车轴，夫妻反目成仇。' },
      { position: 4, name: '六四', text: '有孚，血去惕出，无咎。', interpretation: '有诚信，忧愁恐惧离去，无灾祸。' },
      { position: 5, name: '九五', text: '有孚挛如，富以其邻。', interpretation: '诚信紧密相连，与邻居共享富裕。' },
      { position: 6, name: '上九', text: '既雨既处，尚德载。妇贞厉，月几望，君子征凶。', interpretation: '已经下雨已经停止，崇尚德行承载。妇人守正有危险。' }
    ]
  ),
  H(10, '天泽履', '䷉', 'qian', 'dui',
    '履虎尾，不咥人，亨。',
    '履，柔履刚也。',
    {
      summary: '此卦象征谨慎前行之象。踩虎尾巴而不被咬，小心行事可化险为夷。',
      career: '事业需谨慎行事，步步为营，遵守规则。',
      relationship: '感情需小心翼翼维护，尊重对方感受。',
      health: '行动安全第一，防止意外伤害。',
      wealth: '投资需谨慎评估风险，保守为宜。'
    },
    [
      { position: 1, name: '初九', text: '素履往，无咎。', interpretation: '朴素坦率前往，无灾祸。' },
      { position: 2, name: '九二', text: '履道坦坦，幽人贞吉。', interpretation: '行走大道平坦，隐士守正吉祥。' },
      { position: 3, name: '六三', text: '眇能视，跛能履，履虎尾咥人，凶。武人为于大君。', interpretation: '眼盲能看，脚跛能走，踩虎尾被咬伤，凶险。' },
      { position: 4, name: '九四', text: '履虎尾愬愬，终吉。', interpretation: '踩虎尾战战兢兢，最终吉祥。' },
      { position: 5, name: '九五', text: '夬履，贞厉。', interpretation: '决然前行，守正有危险。' },
      { position: 6, name: '上九', text: '视履考祥，其旋元吉。', interpretation: '审视行为考察祥瑞，周旋圆满大吉。' }
    ]
  ),
  H(11, '地天泰', '䷊', 'kun', 'qian',
    '小往大来，吉亨。',
    '泰，则是天地交而万物通也。',
    {
      summary: '此卦大吉！天地交感，万物通达。阴阳调和，诸事亨通之最佳卦象。',
      career: '事业鼎盛期，机遇连连，大展宏图。',
      relationship: '感情美满和谐，天人合一。',
      health: '身体健康，精神愉悦。',
      wealth: '财源广进，正财偏财皆旺。'
    },
    [
      { position: 1, name: '初九', text: '拔茅茹以其汇，征吉。', interpretation: '拔茅草连带根部，前进吉祥。' },
      { position: 2, name: '九二', text: '包荒，用冯河，不遐遗，朋亡，得尚于中行。', interpretation: '包容广阔，徒涉大河，不远遗弃，无私党，得助于中道。' },
      { position: 3, name: '九三', text: '无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。', interpretation: '没有平坦不变坡，没有去而不返，艰难守正无灾祸。' },
      { position: 4, name: '六四', text: '翩翩不富以其邻，不戒以孚。', interpretation: '轻盈飞翔不以富裕夸耀邻里，不用戒备而有诚信。' },
      { position: 5, name: '六五', text: '帝乙归妹，以祉元吉。', interpretation: '帝乙嫁女，以此得福大吉。' },
      { position: 6, name: '上六', text: '城复于隍，勿用师，自邑告命，贞吝。', interpretation: '城墙倒塌于护城沟，不可用兵，自城邑宣告命令。' }
    ]
  ),
  H(12, '天地否', '䷋', 'qian', 'kun',
    '否之匪人，不利君子贞，大往小来。',
    '否，则是天地不交而万物不通也。',
    {
      summary: '此卦闭塞不通之象。天地隔绝，阴阳失调。宜守静待变，韬光养晦。',
      career: '事业受阻，宜低调行事，保存实力。',
      relationship: '感情疏远冷淡，需耐心修复关系。',
      health: '注意身心健康，预防抑郁倾向。',
      wealth: '财运低迷，宜保守理财，减少开支。'
    },
    [
      { position: 1, name: '初六', text: '拔茅茹以其汇，贞吉亨。', interpretation: '拔茅草连带根部，守正吉祥亨通。' },
      { position: 2, name: '六二', text: '包承，小人吉，大人否亨。', interpretation: '包容承受，小人吉祥，大人闭塞亨通。' },
      { position: 3, name: '六三', text: '包羞。', interpretation: '包含羞耻。' },
      { position: 4, name: '九四', text: '有命无咎，畴离祉。', interpretation: '有天命无灾祸，同类依附福祉。' },
      { position: 5, name: '九五', text: '休否，大人吉。其亡其亡，系于苞桑。', interpretation: '停止闭塞，大人吉祥。灭亡灭亡，系于桑树丛。' },
      { position: 6, name: '上九', text: '倾否，先否后喜。', interpretation: '倾覆闭塞，先闭塞后喜悦。' }
    ]
  ),
  H(13, '天火同人', '䷌', 'qian', 'li',
    '同人于野，亨。利涉大川，利君子贞。',
    '同人，柔得位得中而应乎乾。',
    {
      summary: '此卦象征志同道合之象。天与火同辉，同心协力。宜合作共赢。',
      career: '团队合作顺利，志同道合者共谋大业。',
      relationship: '感情默契，心灵相通。',
      health: '心情开朗有益健康。',
      wealth: '合作创富，互利共赢。'
    },
    [
      { position: 1, name: '初九', text: '同人于门，无咎。', interpretation: '在门口与人聚合，无灾祸。' },
      { position: 2, name: '六二', text: '同人于宗，吝。', interpretation: '只在宗族内部聚合，有所憾惜。' },
      { position: 3, name: '九三', text: '伏戎于莽，升其高陵，三岁不兴。', interpretation: '埋伏军队于草莽，登上高陵，三年不能兴起。' },
      { position: 4, name: '九四', text: '乘其墉，弗克攻，吉。', interpretation: '登上城墙，不能攻克，吉祥。' },
      { position: 5, name: '九五', text: '同人先号咷而后笑，大师克相遇。', interpretation: '聚合之人先哭后笑，大军胜利相遇。' },
      { position: 6, name: '上九', text: '同人于郊，无悔。', interpretation: '在郊外与人聚合，没有悔恨。' }
    ]
  ),
  H(14, '火天大有', '䷍', 'li', 'qian',
    '元亨。',
    '大有，柔得尊位大中而上下应之。',
    {
      summary: '此卦大富大有之象。火在天上，光照万物。丰盛昌隆，大有作为。',
      career: '事业辉煌，成就斐然，名利双收。',
      relationship: '感情充实丰富，幸福美满。',
      health: '精力充沛，健康状态佳。',
      wealth: '财运极佳，收入丰厚，资产增值。'
    },
    [
      { position: 1, name: '初九', text: '无交害，匪咎，艰则无咎。', interpretation: '无交往之害，不是灾祸，艰难则无灾祸。' },
      { position: 2, name: '九二', text: '大车以载，有攸往，无咎。', interpretation: '大车载物，有所前往，无灾祸。' },
      { position: 3, name: '九三', text: '公用亨于天子，小人弗克。', interpretation: '公侯向天子献礼，小人做不到。' },
      { position: 4, name: '九四', text: '匪其彭，无咎。', interpretation: '不自我膨胀，无灾祸。' },
      { position: 5, name: '六五', text: '厥孚交如威如，吉。', interpretation: '诚信交接有威严，吉祥。' },
      { position: 6, name: '上九', text: '自天祐之，吉无不利。', interpretation: '上天保佑，吉祥无所不利。' }
    ]
  ),
  H(15, '地山谦', '䷎', 'kun', 'gen',
    '亨，君子有终。',
    '谦，亨天道下济而光明，地道卑而上行。',
    {
      summary: '此卦象征谦虚逊让之象。地中有山，内高外低。谦受益满招损。',
      career: '事业宜谦虚谨慎，不骄不躁，必有好结果。',
      relationship: '感情中互相尊重，谦和相处。',
      health: '心态平和，有利于身心健康。',
     财富: '谦逊待人，人脉即财脉。'
    },
    [
      { position: 1, name: '初六', text: '谦谦君子，用涉大川，吉。', interpretation: '谦虚再谦虚的君子，可以渡过大河，吉祥。' },
      { position: 2, name: '六二', text: '鸣谦，贞吉。', interpretation: '名声谦逊，守正吉祥。' },
      { position: 3, name: '九三', text: '劳谦君子，有终吉。', interpretation: '勤劳谦虚的君子，有好的结局吉祥。' },
      { position: 4, name: '六四', text: '无不利撝谦。', interpretation: '无不发挥谦虚之德。' },
      { position: 5, name: '六五', text: '不富以其邻，利用侵伐，无不利。', interpretation: '不因富裕而傲慢邻居，利于征伐，无所不利。' },
      { position: 6, name: '上六', text: '鸣谦，利用行师征邑国。', interpretation: '名声谦逊，利于行军征伐邑国。' }
    ]
  ),
  H(16, '雷地豫', '䷏', 'zhen', 'kun',
    '利建侯行师。',
    '豫，刚应而志行，顺以动，豫。',
    {
      summary: '此卦象征欢乐和悦之象。雷出地奋，欢乐舒畅。宜把握时机，积极行动。',
      career: '事业顺遂，心情愉快，适合开拓进取。',
      relationship: '感情欢愉甜蜜，享受当下美好时光。',
      health: '心情愉悦促进健康，但忌过度享乐。',
      wealth: '财运顺畅，宜积极把握机会。'
    },
    [
      { position: 1, name: '初六', text: '鸣豫，凶。', interpretation: '自鸣得意享乐，凶险。' },
      { position: 2, name: '六二', text: '介于石，不终日，贞吉。', interpretation: '耿介如石，不到一天就觉悟，守正吉祥。' },
      { position: 3, name: '六三', text: '盱豫悔，迟有悔。', interpretation: '仰视享乐有悔恨，迟疑也有悔恨。' },
      { position: 4, name: '九四', text: '由豫，大有得。勿疑，朋盍簪。', interpretation: '由他带来欢乐，大有收获。不要怀疑，朋友聚集。' },
      { position: 5, name: '六五', text: '贞疾，恒不死。', interpretation: '坚守正道有疾患，长久不死。' },
      { position: 6, name: '上六', text: '冥豫，成有渝，无咎。', interpretation: '昏暗享乐，已成之事有改变，无灾祸。' }
    ]
  ),
  H(17, '泽雷随', '䷐', 'dui', 'zhen',
    '元亨利贞，无咎。',
    '随，刚来而下柔，动而悦，随。',
    {
      summary: '此卦象征随从追随之象。泽中有雷，随时而动。宜灵活应变，顺势而为。',
      career: '事业宜跟随趋势，灵活调整策略。',
      relationship: '感情随缘而来，顺其自然发展。',
      health: '顺应自然节律生活，有益健康。',
      wealth: '跟随市场趋势投资，顺势而为。'
    },
    [
      { position: 1, name: '初九', text: '官有渝，贞吉，出门交有功。', interpretation: '职守有变动，守正吉祥，出门交往有功劳。' },
      { position: 2, name: '六二', text: '系小子，失丈夫。', interpretation: '系恋小孩，失去丈夫。' },
      { position: 3, name: '六三', text: '系丈夫，失小子，随有求得，利居贞。', interpretation: '系恋丈夫，失去小孩，随从有所求获得，宜安居守正。' },
      { position: 4, name: '九四', text: '随有获，贞凶。有孚在道以明，何咎？', interpretation: '随从有收获，守正凶险。有诚信在道上光明，有什么灾祸？' },
      { position: 5, name: '九五', text: '孚于嘉，吉。', interpretation: '诚信于美好，吉祥。' },
      { position: 6, name: '上六', text: '拘系之，乃从维之，王用亨于西山。', interpretation: '拘禁维系他，君王在西山祭祀。' }
    ]
  ),
  H(18, '山风蛊', '䷑', 'gen', 'xun',
    '元亨，利涉大川，先甲三日，后甲三日。',
    '蛊，刚上而柔下，巽而止，蛊。',
    {
      summary: '此卦象征腐败整治之象。山下有风，物久生虫。宜革除弊政，拨乱反正。',
      career: '事业面临整顿改革，清除积弊，重新出发。',
      relationship: '感情需清理过往问题，重新建立信任。',
      health: '注意体内毒素排出，排毒养生。',
      wealth: '清理不良资产，整顿财务状况。'
    },
    [
      { position: 1, name: '初六', text: '干父之蛊，有子考无咎，厉终吉。', interpretation: '纠正父辈弊病，有儿子继承无灾祸，危险终吉祥。' },
      { position: 2, name: '九二', text: '干母之蛊，不可贞。', interpretation: '纠正母亲弊病，不可以固执。' },
      { position: 3, name: '九三', text: '干父之蛊，小有悔，无大咎。', interpretation: '纠正父辈弊病，稍有悔恨，无大灾祸。' },
      { position: 4, name: '六四', text: '裕父之蛊，往见吝。', interpretation: '宽容父辈弊病，前往可见遗憾。' },
      { position: 5, name: '六五', text: '干父之蛊，用誉。', interpretation: '纠正父辈弊病，受到称誉。' },
      { position: 6, name: '上九', text: '不事王侯，高尚其事。', interpretation: '不侍奉王侯，崇尚高尚的事业。' }
    ]
  ),
  H(19, '地泽临', '䷒', 'kun', 'dui',
    '元亨利贞，至于八月有凶。',
    '临，刚浸而长，说而顺，刚中而应。',
    {
      summary: '此卦象征居高临下之象。地在上泽在下，君临天下。宜把握时机，积极进取。',
      career: '事业上升期，地位提升，施展抱负的好时机。',
      relationship: '感情主动出击，掌握主导权。',
      health: '精力充沛，状态良好。',
      wealth: '财运上升，宜扩大投资规模。'
    },
    [
      { position: 1, name: '初九', text: '咸临，贞吉。', interpretation: '感化临视，守正吉祥。' },
      { position: 2, name: '九二', text: '咸临，吉无不利。', interpretation: '感化临视，吉祥无所不利。' },
      { position: 3, name: '六三', text: '甘临，无攸利，既忧之，无咎。', interpretation: '甜言蜜语临视，无所利益，既然忧惧则无灾祸。' },
      { position: 4, name: '六四', text: '至临，无咎。', interpretation: '亲自莅临，无灾祸。' },
      { position: 5, name: '六五', text: '知临，大君之宜，吉。', interpretation: '智慧临视，大国君主之所宜，吉祥。' },
      { position: 6, name: '上六', text: '敦临，吉无咎。', interpretation: '敦厚临视，吉祥无灾祸。' }
    ]
  ),
  H(20, '风地观', '䷓', 'xun', 'kun',
    '盥而不荐，有孚颙若。',
    '观，盥而不荐，有孚颙若。',
    {
      summary: '此卦象征观察瞻仰之象。风行地上，遍观万物。宜深入观察，审慎决策。',
      career: '事业宜多观察分析，深入了解情况后再行动。',
      relationship: '感情需仔细观察对方，理性判断。',
      health: '关注身体信号，定期体检。',
      wealth: '观察市场走势，理性投资。'
    },
    [
      { position: 1, name: '初六', text: '童观，小人无咎，君子吝。', interpretation: '幼稚的观察，小人无灾祸，君子有憾惜。' },
      { position: 2, name: '六二', text: '窥观，利女贞。', interpretation: '从门缝偷看，利于女子守正。' },
      { position: 3, name: '六三', text: '观我生进退。', interpretation: '观察我的生存进退之道。' },
      { position: 4, name: '六四', text: '观国之光，利用宾于王。', interpretation: '观光国家盛况，利于做君王的宾客。' },
      { position: 5, name: '九五', text: '观我生，君子无咎。', interpretation: '观察我的生存之道，君子无灾祸。' },
      { position: 6, name: '上九', text: '观其生，君子无咎。', interpretation: '观察他的生存之道，君子无灾祸。' }
    ]
  ),
  H(21, '火雷噬嗑', '䷔', 'li', 'zhen',
    '亨，利用狱。',
    '噬嗑，颐中有物曰噬嗑。',
    {
      summary: '此卦象征决断刑罚之象。雷电交合，威明并用。宜果断处理障碍。',
      career: '事业遇到阻碍需坚决处理，清除障碍。',
      relationship: '感情中的问题需直面解决，不可回避。',
      health: '及时治疗疾病，不可拖延。',
      wealth: '处理债务纠纷，收回欠款。'
    },
    [
      { position: 1, name: '初九', text: '屦校灭趾，无咎。', interpretation: '脚戴刑具遮没脚趾，无灾祸。' },
      { position: 2, name: '六二', text: '噬肤灭鼻，无咎。', interpretation: '咬肉遮没鼻子，无灾祸。' },
      { position: 3, name: '六三', text: '噬腊肉遇毒，小吝，无咎。', interpretation: '咬腊肉遇毒，小有遗憾，无灾祸。' },
      { position: 4, name: '九四', text: '噬干胏得金矢，利艰贞吉。', interpretation: '咬带骨肉得铜箭头，宜艰难守正吉祥。' },
      { position: 5, name: '六五', text: '噬干肉得黄金，贞厉无咎。', interpretation: '咬干肉得黄金，守正有危险无灾祸。' },
      { position: 6, name: '上九', text: '荷校灭耳，凶。', interpretation: '肩扛刑具遮没耳朵，凶险。' }
    ]
  ),
  H(22, '山火贲', '䷕', 'gen', 'li',
    '亨。小利有攸往。',
    '贲，柔来而文刚，故亨。',
    {
      summary: '此卦象征文饰美化之象。山下有火，光彩照人。注重外在形象与内在实质平衡。',
      career: '事业宜包装宣传，但不可华而不实。',
      relationship: '感情浪漫温馨，注重仪式感。',
      health: '外表整洁美观，心情愉悦。',
      wealth: '合理装饰投资，提升价值。'
    },
    [
      { position: 1, name: '初九', text: '贲其趾，舍车而徒。', interpretation: '修饰脚趾，舍弃车子步行。' },
      { position: 2, name: '六二', text: '贲其须。', interpretation: '修饰胡须。' },
      { position: 3, name: '九三', text: '贲如濡如，永贞吉。', interpretation: '修饰润泽的样子，永远守正吉祥。' },
      { position: 4, name: '六四', text: '贲如皤如，白马翰如，匪寇婚媾。', interpretation: '修饰素白的样子，白马飞奔，非敌寇而是求婚。' },
      { position: 5, name: '六五', text: '贲于丘园，束帛戋戋，吝，终吉。', interpretation: '修饰山丘园圃，礼物微薄，有憾惜终吉祥。' },
      { position: 6, name: '上九', text: '白贲，无咎。', interpretation: '白色文饰，无灾祸。' }
    ]
  ),
  H(23, '山地剥', '䷖', 'gen', 'kun',
    '不利有攸往。',
    '剥，柔变刚也。',
    {
      summary: '此卦象征剥落衰败之象。山附于地，基础不稳。宜守不宜攻，静待转机。',
      career: '事业衰退期，宜收缩防守，保存实力。',
      relationship: '感情出现裂痕，需努力修补。',
      health: '身体虚弱，注意休息调养。',
     财富: '资产缩水，宜止损保值。'
    },
    [
      { position: 1, name: '初六', text: '剥床以足，蔑贞凶。', interpretation: '剥蚀床足，轻视守正凶险。' },
      { position: 2, name: '六二', text: '剥床以辨，蔑贞凶。', interpretation: '剥蚀床板，轻视守正凶险。' },
      { position: 3, name: '六三', text: '剥之，无咎。', interpretation: '剥蚀它，无灾祸。' },
      { position: 4, name: '六四', text: '剥床以肤，凶。', interpretation: '剥蚀床身近肤，凶险。' },
      { position: 5, name: '六五', text: '贯鱼以宫人宠，无不利。', interpretation: '鱼贯而入宫人受宠，无所不利。' },
      { position: 6, name: '上九', text: '硕果不食，君子得舆，小人剥庐。', interpretation: '大果实不被吃掉，君子得到车子，小人失去房屋。' }
    ]
  ),
  H(24, '地雷复', '䷗', 'kun', 'zhen',
    '亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',
    '复，其见天地之心乎。',
    {
      summary: '此卦象征一阳来复之象。雷在地中，万物复苏。绝处逢生，希望重现。',
      career: '事业触底反弹，迎来新的发展机遇。',
      relationship: '感情重归于好，破镜重圆。',
      health: '身体康复，生命力恢复。',
      wealth: '财运回升，投资迎来收获期。'
    },
    [
      { position: 1, name: '初九', text: '不远复，无祗悔，元吉。', interpretation: '走出不远就返回，无大悔恨，大吉。' },
      { position: 2, name: '六二', text: '休复，吉。', interpretation: '美好的回归，吉祥。' },
      { position: 3, name: '六三', text: '频复，厉无咎。', interpretation: '皱眉愁苦返回，危险无灾祸。' },
      { position: 4, name: '六四', text: '中行独复。', interpretation: '中途独自返回。' },
      { position: 5, name: '六五', text: '敦复，无悔。', interpretation: '敦厚返回，没有悔恨。' },
      { position: 6, name: '上六', text: '迷复凶，有灾眚。用行师，终有大败。以其国君凶，至于十年不克征。', interpretation: '迷路返回凶险，有灾害。用兵征战终有大败。' }
    ]
  ),
  H(25, '天雷无妄', '䷘', 'qian', 'zhen',
    '元亨利贞。其匪正有眚，不利有攸往。',
    '无妄，刚自外来而为主于内。',
    {
      summary: '此卦象征无妄而得之象。天下雷行，物与无妄。出乎意料之外的结果。',
      career: '事业可能有意外之喜或意外之惊，需随机应变。',
      relationship: '感情突如其来，意想不到的发展。',
      health: '注意突发性疾病，做好预防。',
      wealth: '意外之财或意外损失，需谨慎应对。'
    },
    [
      { position: 1, name: '初九', text: '无妄往吉。', interpretation: '无妄前往吉祥。' },
      { position: 2, name: '六二', text: '不耕获，不菑畬，则利有攸往。', interpretation: '不耕种就有收获，不开垦就有熟田，利于前往。' },
      { position: 3, name: '六三', text: '无妄之灾，或系之牛，行人之得，邑人之灾。', interpretation: '无妄之灾，有人系牛于此，行人得牛，邑人遭灾。' },
      { position: 4, name: '九四', text: '可贞无咎。', interpretation: '可以守正无灾祸。' },
      { position: 5, name: '九五', text: '无妄之疾，勿药有喜。', interpretation: '无妄之疾，不吃药也会好转。' },
      { position: 6, name: '上九', text: '无妄行有眚，无攸利。', interpretation: '无妄而行有灾祸，无所利益。' }
    ]
  ),
  H(26, '山天大畜', '䷙', 'gen', 'qian',
    '利贞，不家食吉，利涉大川。',
    '大畜，刚健笃实辉光，日新其德。',
    {
      summary: '此卦象征大有积蓄之象。天在山中，蕴藏深厚。厚积薄发，大有可为。',
      career: '事业积累期，资源丰富，实力雄厚。',
      relationship: '感情深厚稳固，经得起考验。',
      health: '体质增强，精力充沛。',
      wealth: '资产大幅增长，财富积累丰厚。'
    },
    [
      { position: 1, name: '初九', text: '有厉，利已。', interpretation: '有危险，宜停止。' },
      { position: 2, name: '九二', text: '舆说輹。', interpretation: '车身与车轴脱离。' },
      { position: 3, name: '九三', text: '良马逐，利艰贞，日闲舆卫，利有攸往。', interpretation: '良马奔驰，宜艰难守正，每日练习车马防卫，利于前往。' },
      { position: 4, name: '六四', text: '童牛之牿，元吉。', interpretation: '小牛角上绑横木，大吉。' },
      { position: 5, name: '六五', text: '豕之牙，吉。', interpretation: '猪的牙齿，吉祥。' },
      { position: 6, name: '上九', text: '何天之衢，亨。', interpretation: '何等畅通的天上大道，亨通。' }
    ]
  ),
  H(27, '山雷颐', '䷚', 'gen', 'zhen',
    '贞吉。观颐，自求口实。',
    '颐，贞正则吉也，观其所养也。',
    {
      summary: '此卦象征养育修养之象。山下有雷，春雷萌动。注重养生与修身养性。',
      career: '事业需注重内在修养和能力提升。',
      relationship: '感情需用心经营呵护，相互滋养。',
      health: '特别关注饮食营养和养生保健。',
      wealth: '合理消费，量入为出。'
    },
    [
      { position: 1, name: '初九', text: '舍尔灵龟，观我朵颐，凶。', interpretation: '舍弃你的灵龟，看我鼓腮进食，凶险。' },
      { position: 2, name: '六二', text: '颠颐拂经于丘颐，征凶。', interpretation: '颠倒养育违背常理于丘陵养育，前往凶险。' },
      { position: 3, name: '六三', text: '拂颐，贞凶，十年勿用，无攸利。', interpretation: '违背养育之道，守正凶险，十年不可用，无所利益。' },
      { position: 4, name: '六四', text: '颠颐吉，虎视眈眈，其欲逐逐，无咎。', interpretation: '颠倒养育吉祥，老虎注视的样子，欲望追逐，无灾祸。' },
      { position: 5, name: '六五', text: '拂经居贞吉，不可涉大川。', interpretation: '违背常理安居守正吉祥，不可渡越大河。' },
      { position: 6, name: '上九', text: '由颐，厉吉，利涉大川。', interpretation: '由它供养，危险吉祥，利于渡越大河。' }
    ]
  ),
  H(28, '泽风大过', '䷛', 'dui', 'xun',
    '栋桡，利有攸往，亨。',
    '大过，大者过也。',
    {
      summary: '此卦象征大为过度之象。泽灭木，栋梁弯曲。非常时期需非常手段。',
      career: '事业面临重大挑战，需采取非常规措施。',
      relationship: '感情经历重大考验，需勇气面对。',
      health: '身体状况异常，需特别关注。',
      wealth: '财务危机或重大投资机会并存。'
    },
    [
      { position: 1, name: '初六', text: '藉用白茅，无咎。', interpretation: '用白茅草垫在下面，无灾祸。' },
      { position: 2, name: '九二', text: '枯杨生稊，老夫得其女妻，无不利。', interpretation: '枯杨树生嫩芽，老夫得少妻，无所不利。' },
      { position: 3, name: '九三', text: '栋桡凶。', interpretation: '栋梁弯曲，凶险。' },
      { position: 4, name: '九四', text: '栋隆吉，有它吝。', interpretation: '栋梁隆起吉祥，有其他问题有憾惜。' },
      { position: 5, name: '九五', text: '枯杨生华，老妇得其士夫，无咎无誉。', interpretation: '枯杨树开花，老妇得少夫，无灾祸无赞誉。' },
      { position: 6, name: '上六', text: '过涉灭顶，凶，无咎。', interpretation: '涉水过深淹没头顶，凶险，无灾祸。' }
    ]
  ),
  H(29, '坎为水', '䷜', 'kan', 'kan',
    '习坎，有孚，维心亨，行有尚。',
    '坎，重险也。水流而不盈。',
    {
      summary: '此卦象征险陷困难之象。水流不息，险陷重重。需坚定信念，勇往直前。',
      career: '事业遭遇重重困难，需坚持不懈才能突破。',
      relationship: '感情经历波折，真心可渡难关。',
      health: '注意肾脏泌尿系统，防范隐患。',
      wealth: '资金周转困难，需精打细算。'
    },
    [
      { position: 1, name: '初六', text: '习坎，入于坎窞，凶。', interpretation: '重重险陷，落入陷阱深渊，凶险。' },
      { position: 2, name: '九二', text: '坎有险，求小得。', interpretation: '坎陷有危险，求取小有收获。' },
      { position: 3, name: '六三', text: '来之坎坎，险且枕，入于坎窞，勿用。', interpretation: '来去都是险陷，危险且枕着不安，落入陷阱，不可用。' },
      { position: 4, name: '六四', text: '樽酒簋贰用缶，纳约自牖，终无咎。', interpretation: '一樽酒两簋饭用瓦器，从窗户递送简约之物，终无灾祸。' },
      { position: 5, name: '九五', text: '坎不盈，祗既平，无咎。', interpretation: '坑坎未满，已平整，无灾祸。' },
      { position: 6, name: '上六', text: '系用徽纆，寘于丛棘，三岁不得，凶。', interpretation: '用绳索捆绑，置于荆棘丛中，三年不得脱身，凶险。' }
    ]
  ),
  H(30, '离为火', '䷝', 'li', 'li',
    '利贞亨，畜牝牛吉。',
    '离，丽也。日月丽乎天，百谷草木丽乎土。',
    {
      summary: '此卦象征光明附丽之象。两火相重，光明盛大。宜彰显才华，发挥光热。',
      career: '事业光明璀璨，才华得以展现。',
      relationship: '感情热烈明亮，相互吸引。',
      health: '精力充沛，眼神有神。',
      wealth: '前途光明，财富增长可见。'
    },
    [
      { position: 1, name: '初九', text: '履错然，敬之无咎。', interpretation: '步履错乱，恭敬对待无灾祸。' },
      { position: 2, name: '六二', text: '黄离元吉。', interpretation: '黄色附着大吉。' },
      { position: 3, name: '九三', text: '日昃之离，不鼓缶而歌，则大耋之嗟，凶。', interpretation: '夕阳西下的光明，不敲瓦盆唱歌，则老人叹息，凶险。' },
      { position: 4, name: '九四', text: '突如其来如，焚如，死如，弃如。', interpretation: '突然来到，燃烧的样子，死亡的样子，抛弃的样子。' },
      { position: 5, name: '六五', text: '出涕沱若，戚嗟若，吉。', interpretation: '泪流如雨，悲伤叹息，吉祥。' },
      { position: 6, name: '上九', text: '王用出征，有嘉折首，获匪其丑，无咎。', interpretation: '君王出征，嘉奖斩首之功，俘获的不是一般丑类，无灾祸。' }
    ]
  ),
  H(31, '泽山咸', '䷞', 'dui', 'gen',
    '亨，利贞，取女吉。',
    '咸，感也。柔上而刚下，二气感应以相与。',
    {
      summary: '此卦象征感应相通之象。山上有泽，相互感应。宜以诚相待，心心相印。',
      career: '事业宜与人合作，建立良好沟通与信任。',
      relationship: '感情和谐美满，心意相通，利于婚嫁。',
      health: '身心舒畅，人际关系和谐有益健康。',
      wealth: '合作生财，互利共赢。'
    },
    [
      { position: 1, name: '初六', text: '咸其拇。', interpretation: '感应到脚拇指。' },
      { position: 2, name: '六二', text: '咸其腓，凶，居吉。', interpretation: '感应到小腿，凶险，安居吉祥。' },
      { position: 3, name: '九三', text: '咸其股，执其随，往吝。', interpretation: '感应到大腿，执意跟随，前往有憾惜。' },
      { position: 4, name: '九四', text: '贞吉悔亡，憧憧往来，朋从尔思。', interpretation: '守正吉祥悔恨消失，心意往来不定，朋友顺从你的想法。' },
      { position: 5, name: '九五', text: '咸其脢，无悔。', interpretation: '感应到背脊，没有悔恨。' },
      { position: 6, name: '上六', text: '咸其辅颊舌。', interpretation: '感应到面颊和舌头。' }
    ]
  ),
  H(32, '雷风恒', '䷟', 'zhen', 'xun',
    '亨，无咎，利贞，利有攸往。',
    '恒，久也。刚上而柔下，雷风相与，巽而动。',
    {
      summary: '此卦象征恒久持久之象。雷风相与，长久不变。宜持之以恒，守正不移。',
      career: '事业需长期坚持，不可半途而废。',
      relationship: '感情稳定长久，宜坚守承诺。',
      health: '保持良好习惯，持之以恒有益健康。',
      wealth: '稳健投资，长期持有。'
    },
    [
      { position: 1, name: '初六', text: '浚恒，贞凶，无攸利。', interpretation: '深求恒久，守正凶险，无所利益。' },
      { position: 2, name: '九二', text: '悔亡。', interpretation: '悔恨消失。' },
      { position: 3, name: '九三', text: '不恒其德，或承之羞，贞吝。', interpretation: '不能恒久保持德行，或许承受羞辱，守正有憾惜。' },
      { position: 4, name: '九四', text: '田无禽。', interpretation: '田猎没有捕获禽兽。' },
      { position: 5, name: '六五', text: '恒其德，贞妇人吉，夫子凶。', interpretation: '恒久保持德行，妇人守正吉祥，男子凶险。' },
      { position: 6, name: '上六', text: '振恒，凶。', interpretation: '振动不安于恒久，凶险。' }
    ]
  ),
  H(33, '天山遁', '䷠', 'qian', 'gen',
    '亨，小利贞。',
    '遁，退也。刚当位而应，与时行也。',
    {
      summary: '此卦象征退避隐遁之象。天下有山，君子退避。宜知进退，适时隐退。',
      career: '事业宜暂时退让，韬光养晦。',
      relationship: '感情需要空间，不宜强求。',
      health: '注意休息，避免过度劳累。',
      wealth: '保守理财，减少开支。'
    },
    [
      { position: 1, name: '初六', text: '遁尾，厉，勿用有攸往。', interpretation: '退避在末尾，危险，不宜有所前往。' },
      { position: 2, name: '六二', text: '执之用黄牛之革，莫之胜说。', interpretation: '用黄牛皮捆绑，不能解脱。' },
      { position: 3, name: '九三', text: '系遁，有疾厉，畜臣妾吉。', interpretation: '系恋退避，有疾病危险，畜养臣妾吉祥。' },
      { position: 4, name: '九四', text: '好遁，君子吉，小人否。', interpretation: '喜好退避，君子吉祥，小人否塞。' },
      { position: 5, name: '九五', text: '嘉遁，贞吉。', interpretation: '美好的退避，守正吉祥。' },
      { position: 6, name: '上九', text: '肥遁，无不利。', interpretation: '宽裕地退避，无所不利。' }
    ]
  ),
  H(34, '雷天大壮', '䷡', 'zhen', 'qian',
    '利贞。',
    '大壮，大者壮也。刚以动，故壮。',
    {
      summary: '此卦象征刚强盛壮之象。雷在天上，声势浩大。宜守正用壮，不可妄动。',
      career: '事业强盛，但需谨慎行事，避免冒进。',
      relationship: '感情热烈，但需注意方式方法。',
      health: '精力旺盛，注意节制。',
      wealth: '财运旺盛，但需稳健。'
    },
    [
      { position: 1, name: '初九', text: '壮于趾，征凶，有孚。', interpretation: '强壮于脚趾，前往凶险，有诚信。' },
      { position: 2, name: '九二', text: '贞吉。', interpretation: '守正吉祥。' },
      { position: 3, name: '九三', text: '小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。', interpretation: '小人用强壮，君子用无为，守正有危险。公羊触藩篱，卡住角。' },
      { position: 4, name: '九四', text: '贞吉悔亡，藩决不羸，壮于大舆之輹。', interpretation: '守正吉祥悔恨消失，藩篱冲破不卡住，强壮于大车的车轴。' },
      { position: 5, name: '六五', text: '丧羊于易，无悔。', interpretation: '在田畔丢失羊，没有悔恨。' },
      { position: 6, name: '上六', text: '羝羊触藩，不能退，不能遂，无攸利，艰则吉。', interpretation: '公羊触藩篱，不能退不能进，无所利益，艰难则吉祥。' }
    ]
  ),
  H(35, '火地晋', '䷢', 'li', 'kun',
    '康侯用锡马蕃庶，昼日三接。',
    '晋，进也。明出地上，顺而丽乎大明。',
    {
      summary: '此卦象征进取上升之象。日出地上，光明盛大。宜积极进取，大展宏图。',
      career: '事业蒸蒸日上，贵人相助，大有可为。',
      relationship: '感情发展顺利，光明正大。',
      health: '身心愉悦，精力充沛。',
      wealth: '财运亨通，收入增长。'
    },
    [
      { position: 1, name: '初六', text: '晋如摧如，贞吉。罔孚，裕无咎。', interpretation: '进取如受挫折，守正吉祥。没有诚信，宽裕无灾祸。' },
      { position: 2, name: '六二', text: '晋如愁如，贞吉。受兹介福，于其王母。', interpretation: '进取如忧愁，守正吉祥。承受大福，来自王母。' },
      { position: 3, name: '六三', text: '众允，悔亡。', interpretation: '众人允许，悔恨消失。' },
      { position: 4, name: '九四', text: '晋如鼫鼠，贞厉。', interpretation: '进取如鼫鼠，守正有危险。' },
      { position: 5, name: '六五', text: '悔亡，失得勿恤，往吉无不利。', interpretation: '悔恨消失，不要忧虑得失，前往吉祥无所不利。' },
      { position: 6, name: '上九', text: '晋其角，维用伐邑，厉吉无咎，贞吝。', interpretation: '进取到角尖，用于征伐城邑，危险吉祥无灾祸，守正有憾惜。' }
    ]
  ),
  H(36, '地火明夷', '䷣', 'kun', 'li',
    '利艰贞。',
    '明夷，明入地中。内文明而外柔顺，以蒙大难。',
    {
      summary: '此卦象征光明受损之象。日入地中，光明被掩。宜韬光养晦，守正待时。',
      career: '事业受阻，宜低调行事，等待时机。',
      relationship: '感情需隐藏真心，不宜张扬。',
      health: '注意情绪调节，避免抑郁。',
      wealth: '财运低迷，宜保守理财。'
    },
    [
      { position: 1, name: '初九', text: '明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。', interpretation: '光明受损时飞翔，垂下翅膀。君子出行，三天不吃饭，有所前往，主人有言语。' },
      { position: 2, name: '六二', text: '明夷，夷于左股，用拯马壮，吉。', interpretation: '光明受损，伤于左大腿，用强壮的马拯救，吉祥。' },
      { position: 3, name: '九三', text: '明夷于南狩，得其大首，不可疾贞。', interpretation: '光明受损时向南狩猎，得到大头目，不可急于守正。' },
      { position: 4, name: '六四', text: '入于左腹，获明夷之心，于出门庭。', interpretation: '进入左腹，获得光明受损的心意，走出家门。' },
      { position: 5, name: '六五', text: '箕子之明夷，利贞。', interpretation: '箕子的光明受损，利于守正。' },
      { position: 6, name: '上六', text: '不明晦，初登于天，后入于地。', interpretation: '不光明而昏暗，起初登天，后来入地。' }
    ]
  ),
  H(37, '风火家人', '䷤', 'xun', 'li',
    '利女贞。',
    '家人，女正位乎内，男正位乎外，男女正，天地之大义也。',
    {
      summary: '此卦象征家庭和睦之象。风自火出，家人相亲。宜正家风，和睦相处。',
      career: '事业需团队合作，如家人般互助。',
      relationship: '感情和家庭和谐美满。',
      health: '家庭和睦有益身心健康。',
      wealth: '家庭理财，稳健积累。'
    },
    [
      { position: 1, name: '初九', text: '闲有家，悔亡。', interpretation: '防范于未然治理家庭，悔恨消失。' },
      { position: 2, name: '六二', text: '无攸遂，在中馈，贞吉。', interpretation: '无所成就，主持家中饮食，守正吉祥。' },
      { position: 3, name: '九三', text: '家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。', interpretation: '家人严厉，悔恨危险吉祥；妇孺嬉笑，最终有憾惜。' },
      { position: 4, name: '六四', text: '富家，大吉。', interpretation: '富裕家庭，大吉。' },
      { position: 5, name: '九五', text: '王假有家，勿恤吉。', interpretation: '君王来到家中，不要忧虑吉祥。' },
      { position: 6, name: '上九', text: '有孚威如，终吉。', interpretation: '有诚信威严的样子，最终吉祥。' }
    ]
  ),
  H(38, '火泽睽', '䷥', 'li', 'dui',
    '小事吉。',
    '睽，火动而上，泽动而下；二女同居，其志不同行。',
    {
      summary: '此卦象征乖离背离之象。火炎上而泽水下，相背而行。宜求同存异，化解矛盾。',
      career: '工作中有分歧，需沟通协调。',
      relationship: '感情有隔阂，需坦诚相待。',
      health: '注意情绪波动，保持平和。',
      wealth: '财务有分歧，需协商解决。'
    },
    [
      { position: 1, name: '初九', text: '悔亡，丧马勿逐，自复；见恶人无咎。', interpretation: '悔恨消失，丢失马不要追逐，自己会回来；见到恶人无灾祸。' },
      { position: 2, name: '九二', text: '遇主于巷，无咎。', interpretation: '在巷中遇到主人，无灾祸。' },
      { position: 3, name: '六三', text: '见舆曳，其牛掣，其人天且劓，无初有终。', interpretation: '看到车被拖，牛被牵，那人被刺额割鼻，没有开始但有结果。' },
      { position: 4, name: '九四', text: '睽孤，遇元夫，交孚，厉无咎。', interpretation: '乖离孤独，遇到善人，诚信交往，危险无灾祸。' },
      { position: 5, name: '六五', text: '悔亡，厥宗噬肤，往何咎。', interpretation: '悔恨消失，同宗之人吃肉，前往有什么灾祸。' },
      { position: 6, name: '上九', text: '睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。', interpretation: '乖离孤独，看到猪背上有泥，载着一车鬼，先张弓后放下弓，不是盗贼是求婚，前往遇雨则吉祥。' }
    ]
  ),
  H(39, '水山蹇', '䷦', 'kan', 'gen',
    '利西南，不利东北；利见大人，贞吉。',
    '蹇，难也，险在前也。见险而能止，知矣哉。',
    {
      summary: '此卦象征艰难险阻之象。山上有水，行路艰难。宜知难而进，寻求贵人。',
      career: '事业遇到困难，需寻求帮助。',
      relationship: '感情有阻碍，需耐心克服。',
      health: '注意关节骨骼，小心意外。',
      wealth: '财务困难，需谨慎应对。'
    },
    [
      { position: 1, name: '初六', text: '往蹇，来誉。', interpretation: '前往困难，回来有赞誉。' },
      { position: 2, name: '六二', text: '王臣蹇蹇，匪躬之故。', interpretation: '王臣艰难重重，不是为了自身。' },
      { position: 3, name: '九三', text: '往蹇来反。', interpretation: '前往困难，回来反归。' },
      { position: 4, name: '六四', text: '往蹇来连。', interpretation: '前往困难，回来连接。' },
      { position: 5, name: '九五', text: '大蹇朋来。', interpretation: '大困难时朋友来。' },
      { position: 6, name: '上六', text: '往蹇来硕，吉；利见大人。', interpretation: '前往困难，回来有硕果，吉祥；利于见到大人。' }
    ]
  ),
  H(40, '雷水解', '䷧', 'zhen', 'kan',
    '利西南，无所往，其来复吉。有攸往，夙吉。',
    '解，险以动，动而免乎险，解。',
    {
      summary: '此卦象征解除困难之象。雷雨作解，万物复苏。宜把握时机，化解矛盾。',
      career: '事业困难即将解除，迎来转机。',
      relationship: '感情误会消除，重归于好。',
      health: '疾病将愈，身体恢复。',
      wealth: '财务问题解决，资金周转。'
    },
    [
      { position: 1, name: '初六', text: '无咎。', interpretation: '无灾祸。' },
      { position: 2, name: '九二', text: '田获三狐，得黄矢，贞吉。', interpretation: '田猎捕获三只狐狸，得到黄色箭矢，守正吉祥。' },
      { position: 3, name: '六三', text: '负且乘，致寇至，贞吝。', interpretation: '背着东西乘车，招致盗贼到来，守正有憾惜。' },
      { position: 4, name: '九四', text: '解而拇，朋至斯孚。', interpretation: '解开你的拇指，朋友来到这里有诚信。' },
      { position: 5, name: '六五', text: '君子维有解，吉；有孚于小人。', interpretation: '君子只有解除，吉祥；对小人也有诚信。' },
      { position: 6, name: '上六', text: '公用射隼于高墉之上，获之，无不利。', interpretation: '公侯在高墙上射隼，捕获它，无所不利。' }
    ]
  ),
  H(41, '山泽损', '䷨', 'gen', 'dui',
    '有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。',
    '损，损下益上，其道上行。',
    {
      summary: '此卦象征减损克制之象。山下有泽，损己利人。宜克己奉公，适度付出。',
      career: '事业需付出努力，可能暂时牺牲利益。',
      relationship: '感情需互相包容，适度付出。',
      health: '注意节制，避免过度消耗。',
      wealth: '可能需要支出，但长远有利。'
    },
    [
      { position: 1, name: '初九', text: '已事遄往，无咎，酌损之。', interpretation: '停下事情迅速前往，无灾祸，酌情减损。' },
      { position: 2, name: '九二', text: '利贞，征凶，弗损益之。', interpretation: '利于守正，前往凶险，不减损而增益它。' },
      { position: 3, name: '六三', text: '三人行，则损一人；一人行，则得其友。', interpretation: '三人同行，则减损一人；一人独行，则得到朋友。' },
      { position: 4, name: '六四', text: '损其疾，使遄有喜，无咎。', interpretation: '减损他的疾病，使迅速有喜事，无灾祸。' },
      { position: 5, name: '六五', text: '或益之，十朋之龟弗克违，元吉。', interpretation: '有人增益他，十朋的龟卜不能违背，大吉。' },
      { position: 6, name: '上九', text: '弗损益之，无咎，贞吉，利有攸往，得臣无家。', interpretation: '不减损而增益他，无灾祸，守正吉祥，利于前往，得到臣仆没有家。' }
    ]
  ),
  H(42, '风雷益', '䷩', 'xun', 'zhen',
    '利有攸往，利涉大川。',
    '益，损上益下，民说无疆，自上下下，其道大光。',
    {
      summary: '此卦象征增益受益之象。风雷相助，相得益彰。宜积极进取，广结善缘。',
      career: '事业大有收益，贵人相助。',
      relationship: '感情互相增益，共同成长。',
      health: '身心受益，精力充沛。',
      wealth: '财运亨通，收益丰厚。'
    },
    [
      { position: 1, name: '初九', text: '利用为大作，元吉，无咎。', interpretation: '利于做大事，大吉，无灾祸。' },
      { position: 2, name: '六二', text: '或益之，十朋之龟弗克违，永贞吉。王用享于帝，吉。', interpretation: '有人增益他，十朋的龟卜不能违背，永远守正吉祥。君王祭祀天帝，吉祥。' },
      { position: 3, name: '六三', text: '益之用凶事，无咎。有孚中行，告公用圭。', interpretation: '增益用于凶事，无灾祸。有诚信中道而行，用圭璧告公。' },
      { position: 4, name: '六四', text: '中行，告公从，利用为依迁国。', interpretation: '中道而行，告公顺从，利于依附迁国。' },
      { position: 5, name: '九五', text: '有孚惠心，勿问之矣，惠我德。大吉。', interpretation: '有诚信惠爱之心，不用问了，惠爱我的德行。大吉。' },
      { position: 6, name: '上九', text: '莫益之，或击之，立心勿恒，凶。', interpretation: '没有人增益他，有人攻击他，立心不恒久，凶险。' }
    ]
  ),
  H(43, '泽天夬', '䷪', 'dui', 'qian',
    '扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。',
    '夬，决也，刚决柔也。君子道长，小人道忧。',
    {
      summary: '此卦象征决断果敢之象。泽水涨满，决堤而泻。宜果断决策，排除障碍。',
      career: '事业需要果断决策，不可犹豫。',
      relationship: '感情需明确态度，果断处理。',
      health: '注意排除体内毒素，排毒养生。',
      wealth: '财务需果断处理，清理不良资产。'
    },
    [
      { position: 1, name: '初九', text: '壮于前趾，往不胜为咎。', interpretation: '强壮于前脚趾，前往不能胜利是灾祸。' },
      { position: 2, name: '九二', text: '惕号，莫夜有戎，勿恤。', interpretation: '警惕呼号，夜间有兵戎，不要忧虑。' },
      { position: 3, name: '九三', text: '壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。', interpretation: '强壮于面颊，有凶险。君子决断果敢，独行遇雨，如被淋湿有愠怒，无灾祸。' },
      { position: 4, name: '九四', text: '臀无肤，其行次且。牵羊悔亡，闻言不信。', interpretation: '臀部没有皮肤，行走困难。牵羊悔恨消失，听到话不相信。' },
      { position: 5, name: '九五', text: '苋陆夬夬，中行无咎。', interpretation: '山羊决断果敢，中道而行无灾祸。' },
      { position: 6, name: '上六', text: '无号，终有凶。', interpretation: '没有呼号，最终有凶险。' }
    ]
  ),
  H(44, '天风姤', '䷫', 'qian', 'xun',
    '女壮，勿用取女。',
    '姤，遇也，柔遇刚也。',
    {
      summary: '此卦象征相遇邂逅之象。天下有风，无物不遇。宜谨慎交往，防范小人。',
      career: '职场可能遇到新的机遇或人物。',
      relationship: '感情可能有新的相遇，需谨慎。',
      health: '注意防范外来侵扰。',
      wealth: '财务可能有意外变化。'
    },
    [
      { position: 1, name: '初六', text: '系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅。', interpretation: '系在金属刹车器上，守正吉祥，有所前往，见到凶险，瘦猪徘徊不前。' },
      { position: 2, name: '九二', text: '包有鱼，无咎，不利宾。', interpretation: '包里有鱼，无灾祸，不利于招待宾客。' },
      { position: 3, name: '九三', text: '臀无肤，其行次且，厉，无大咎。', interpretation: '臀部没有皮肤，行走困难，危险，无大灾祸。' },
      { position: 4, name: '九四', text: '包无鱼，起凶。', interpretation: '包里没有鱼，兴起凶险。' },
      { position: 5, name: '九五', text: '以杞包瓜，含章，有陨自天。', interpretation: '用杞柳包瓜，内含美质，有陨落自天而来。' },
      { position: 6, name: '上九', text: '姤其角，吝，无咎。', interpretation: '相遇于角尖，有憾惜，无灾祸。' }
    ]
  ),
  H(45, '泽地萃', '䷬', 'dui', 'kun',
    '亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。',
    '萃，聚也；顺以说，刚中而应，故聚也。',
    {
      summary: '此卦象征聚集会合之象。泽水汇聚于地，万物聚集。宜团结合作，共谋发展。',
      career: '事业宜团队合作，聚集资源。',
      relationship: '感情和谐团聚，利于婚嫁。',
      health: '身心愉悦，社交有益健康。',
      wealth: '合作生财，聚集财富。'
    },
    [
      { position: 1, name: '初六', text: '有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎。', interpretation: '有诚信不能坚持，于是混乱于是聚集，如果呼号一握手就笑，不要忧虑，前往无灾祸。' },
      { position: 2, name: '六二', text: '引吉，无咎，孚乃利用禴。', interpretation: '引导吉祥，无灾祸，诚信则利于用薄祭。' },
      { position: 3, name: '六三', text: '萃如嗟如，无攸利，往无咎，小吝。', interpretation: '聚集如叹息，无所利益，前往无灾祸，小有憾惜。' },
      { position: 4, name: '九四', text: '大吉，无咎。', interpretation: '大吉，无灾祸。' },
      { position: 5, name: '九五', text: '萃有位，无咎。匪孚，元永贞，悔亡。', interpretation: '聚集有位置，无灾祸。没有诚信，开始永远守正，悔恨消失。' },
      { position: 6, name: '上六', text: '赍咨涕洟，无咎。', interpretation: '叹息流涕，无灾祸。' }
    ]
  ),
  H(46, '地风升', '䷭', 'kun', 'xun',
    '元亨，用见大人，勿恤，南征吉。',
    '升，柔以时升，巽而顺，刚中而应，是以大亨。',
    {
      summary: '此卦象征上升进阶之象。地中生木，日渐成长。宜积极进取，稳步上升。',
      career: '事业蒸蒸日上，职位晋升。',
      relationship: '感情发展顺利，逐步深入。',
      health: '身体逐渐康复，精力恢复。',
      wealth: '财运上升，收入增长。'
    },
    [
      { position: 1, name: '初六', text: '允升，大吉。', interpretation: '允许上升，大吉。' },
      { position: 2, name: '九二', text: '孚乃利用禴，无咎。', interpretation: '诚信则利于用薄祭，无灾祸。' },
      { position: 3, name: '九三', text: '升虚邑。', interpretation: '上升到空虚的城邑。' },
      { position: 4, name: '六四', text: '王用亨于岐山，吉无咎。', interpretation: '君王在岐山祭祀，吉祥无灾祸。' },
      { position: 5, name: '六五', text: '贞吉，升阶。', interpretation: '守正吉祥，登上台阶。' },
      { position: 6, name: '上六', text: '冥升，利于不息之贞。', interpretation: '昏暗地上升，利于不息地守正。' }
    ]
  ),
  H(47, '泽水困', '䷮', 'dui', 'kan',
    '亨，贞，大人吉，无咎，有言不信。',
    '困，刚掩也。险以说，困而不失其所，亨。',
    {
      summary: '此卦象征困顿艰难之象。泽无水，困乏之极。宜坚守正道，等待转机。',
      career: '事业遭遇困境，需坚持等待。',
      relationship: '感情面临考验，需互相支持。',
      health: '注意精神压力，保持乐观。',
      wealth: '财务紧张，需开源节流。'
    },
    [
      { position: 1, name: '初六', text: '臀困于株木，入于幽谷，三岁不觌。', interpretation: '臀部困于树桩，进入幽深山谷，三年不见人。' },
      { position: 2, name: '九二', text: '困于酒食，朱绂方来，利用亨祀，征凶，无咎。', interpretation: '困于酒食，红色官服刚来，利于祭祀，前往凶险，无灾祸。' },
      { position: 3, name: '六三', text: '困于石，据于蒺藜，入于其宫，不见其妻，凶。', interpretation: '困于石头，依靠蒺藜，进入宫室，不见妻子，凶险。' },
      { position: 4, name: '九四', text: '来徐徐，困于金车，吝，有终。', interpretation: '缓缓而来，困于金车，有憾惜，有结果。' },
      { position: 5, name: '九五', text: '劓刖，困于赤绂，乃徐有说，利用祭祀。', interpretation: '割鼻断足，困于红色官服，于是渐渐解脱，利于祭祀。' },
      { position: 6, name: '上六', text: '困于葛藟，于臲卼，曰动悔。有悔，吉。', interpretation: '困于葛藤，不安的样子，说动则有悔恨。有悔恨，吉祥。' }
    ]
  ),
  H(48, '水风井', '䷯', 'kan', 'xun',
    '改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。',
    '井，巽乎水而上水，井；井养而不穷也。',
    {
      summary: '此卦象征水井滋养之象。木上有水，源源不断。宜修身养德，利泽他人。',
      career: '事业如井水，源源不断，稳步发展。',
      relationship: '感情如井水，深厚绵长。',
      health: '注意肾脏保养，多喝水。',
      wealth: '财运稳定，细水长流。'
    },
    [
      { position: 1, name: '初六', text: '井泥不食，旧井无禽。', interpretation: '井泥浑浊不能吃，旧井没有禽兽。' },
      { position: 2, name: '九二', text: '井谷射鲋，瓮敝漏。', interpretation: '井谷中射小鱼，瓮破漏。' },
      { position: 3, name: '九三', text: '井渫不食，为我心恻，可用汲，王明，并受其福。', interpretation: '井水清洁不吃，为我心悲伤，可以汲水，君王明察，都受到他的福气。' },
      { position: 4, name: '六四', text: '井甃，无咎。', interpretation: '井壁砌砖，无灾祸。' },
      { position: 5, name: '九五', text: '井冽，寒泉食。', interpretation: '井水清凉，寒泉可吃。' },
      { position: 6, name: '上六', text: '井收勿幕，有孚元吉。', interpretation: '井水收起不要盖，有诚信大吉。' }
    ]
  ),
  H(49, '泽火革', '䷰', 'dui', 'li',
    '己日乃孚，元亨利贞，悔亡。',
    '革，水火相息，二女同居，其志不相得，曰革。',
    {
      summary: '此卦象征变革改变之象。泽中有火，水火相息。宜顺应时势，勇于变革。',
      career: '事业需要变革创新，迎接新机遇。',
      relationship: '感情可能有变化，需适应调整。',
      health: '注意生活习惯的改变，积极调整。',
      wealth: '财务策略需要调整，适应变化。'
    },
    [
      { position: 1, name: '初九', text: '巩用黄牛之革。', interpretation: '用黄牛皮捆绑牢固。' },
      { position: 2, name: '六二', text: '己日乃革之，征吉，无咎。', interpretation: '己日才变革它，前往吉祥，无灾祸。' },
      { position: 3, name: '九三', text: '征凶，贞厉，革言三就，有孚。', interpretation: '前往凶险，守正危险，变革言论三次成就，有诚信。' },
      { position: 4, name: '九四', text: '悔亡，有孚改命，吉。', interpretation: '悔恨消失，有诚信改变命运，吉祥。' },
      { position: 5, name: '九五', text: '大人虎变，未占有孚。', interpretation: '大人如虎变，没有占卜有诚信。' },
      { position: 6, name: '上六', text: '君子豹变，小人革面，征凶，居贞吉。', interpretation: '君子如豹变，小人改变面貌，前往凶险，安居守正吉祥。' }
    ]
  ),
  H(50, '火风鼎', '䷱', 'li', 'xun',
    '元吉，亨。',
    '鼎，象也。以木巽火，亨饪也。',
    {
      summary: '此卦象征鼎新变革之象。木上有火，烹饪成食。宜革故鼎新，成就大业。',
      career: '事业如鼎，稳固发展，大有成就。',
      relationship: '感情如鼎，稳固和谐。',
      health: '注意饮食健康，营养均衡。',
      wealth: '财运稳固，财富积累。'
    },
    [
      { position: 1, name: '初六', text: '鼎颠趾，利出否，得妾以其子，无咎。', interpretation: '鼎颠倒脚趾，利于倒出废物，得到妾和她的儿子，无灾祸。' },
      { position: 2, name: '九二', text: '鼎有实，我仇有疾，不我能即，吉。', interpretation: '鼎中有食物，我的配偶有病，不能接近我，吉祥。' },
      { position: 3, name: '九三', text: '鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。', interpretation: '鼎耳改变，行走受阻，野鸡肉不吃，正要下雨悔恨消失，最终吉祥。' },
      { position: 4, name: '九四', text: '鼎折足，覆公餗，其形渥，凶。', interpretation: '鼎足折断，倾覆公侯的美食，形状湿漉，凶险。' },
      { position: 5, name: '六五', text: '鼎黄耳金铉，利贞。', interpretation: '鼎有黄色耳朵和金属扛鼎器，利于守正。' },
      { position: 6, name: '上九', text: '鼎玉铉，大吉，无不利。', interpretation: '鼎有玉石扛鼎器，大吉，无所不利。' }
    ]
  ),
  H(51, '震为雷', '䷲', 'zhen', 'zhen',
    '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
    '震，动也。震惊百里，惊远而惧迩也。',
    {
      summary: '此卦象征震动惊动之象。两雷相重，震动剧烈。宜沉着应对，化险为夷。',
      career: '事业可能有变动，需冷静应对。',
      relationship: '感情可能有波折，需稳定情绪。',
      health: '注意神经系统，避免惊吓。',
      wealth: '财务可能有波动，需谨慎。'
    },
    [
      { position: 1, name: '初九', text: '震来虩虩，后笑言哑哑，吉。', interpretation: '震动来时恐惧，后来笑言哑哑，吉祥。' },
      { position: 2, name: '六二', text: '震来厉，亿丧贝，跻于九陵，勿逐，七日得。', interpretation: '震动来时危险，丧失大量财贝，登上九陵，不要追逐，七天后得到。' },
      { position: 3, name: '六三', text: '震苏苏，震行无眚。', interpretation: '震动恐惧不安，震动前行无灾祸。' },
      { position: 4, name: '九四', text: '震遂泥。', interpretation: '震动陷入泥中。' },
      { position: 5, name: '六五', text: '震往来厉，亿无丧，有事。', interpretation: '震动往来危险，没有丧失，有事发生。' },
      { position: 6, name: '上六', text: '震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。', interpretation: '震动恐惧颤抖，目光惊恐，前往凶险。震动不在自己身上，在邻居身上，无灾祸。婚姻有言语。' }
    ]
  ),
  H(52, '艮为山', '䷳', 'gen', 'gen',
    '艮其背，不获其身，行其庭，不见其人，无咎。',
    '艮，止也。时止则止，时行则行，动静不失其时。',
    {
      summary: '此卦象征静止停止之象。两山相重，稳重静止。宜适可而止，知止不殆。',
      career: '事业宜暂停休息，不宜冒进。',
      relationship: '感情需要冷静，保持距离。',
      health: '注意休息，静养身心。',
      wealth: '财务宜保守，不宜投资。'
    },
    [
      { position: 1, name: '初六', text: '艮其趾，无咎，利永贞。', interpretation: '停止脚趾，无灾祸，利于永远守正。' },
      { position: 2, name: '六二', text: '艮其腓，不拯其随，其心不快。', interpretation: '停止小腿，不拯救他的跟随者，他的心不快乐。' },
      { position: 3, name: '九三', text: '艮其限，列其夤，厉薰心。', interpretation: '停止腰部，撕裂脊背肉，危险熏心。' },
      { position: 4, name: '六四', text: '艮其身，无咎。', interpretation: '停止身体，无灾祸。' },
      { position: 5, name: '六五', text: '艮其辅，言有序，悔亡。', interpretation: '停止面颊，言语有序，悔恨消失。' },
      { position: 6, name: '上九', text: '敦艮，吉。', interpretation: '敦厚停止，吉祥。' }
    ]
  ),
  H(53, '风山渐', '䷴', 'xun', 'gen',
    '女归吉，利贞。',
    '渐，进也。女归吉也。进得位，往有功也。',
    {
      summary: '此卦象征渐进稳步之象。山上有木，逐渐成长。宜循序渐进，稳步发展。',
      career: '事业宜稳步发展，不可急躁。',
      relationship: '感情宜循序渐进，利于婚嫁。',
      health: '身体逐渐康复，需要耐心。',
      wealth: '财运稳步增长，积少成多。'
    },
    [
      { position: 1, name: '初六', text: '鸿渐于干，小子厉，有言，无咎。', interpretation: '鸿雁渐进于水边，小子危险，有言语，无灾祸。' },
      { position: 2, name: '六二', text: '鸿渐于磐，饮食衎衎，吉。', interpretation: '鸿雁渐进于磐石，饮食和乐，吉祥。' },
      { position: 3, name: '九三', text: '鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。', interpretation: '鸿雁渐进于陆地，丈夫出征不回来，妇女怀孕不生育，凶险；利于抵御盗贼。' },
      { position: 4, name: '六四', text: '鸿渐于木，或得其桷，无咎。', interpretation: '鸿雁渐进于树木，或许得到平枝，无灾祸。' },
      { position: 5, name: '九五', text: '鸿渐于陵，妇三岁不孕，终莫之胜，吉。', interpretation: '鸿雁渐进于丘陵，妇女三年不怀孕，最终没有人胜过她，吉祥。' },
      { position: 6, name: '上九', text: '鸿渐于陆，其羽可用为仪，吉。', interpretation: '鸿雁渐进于陆地，它的羽毛可以用作仪仗，吉祥。' }
    ]
  ),
  H(54, '雷泽归妹', '䷵', 'zhen', 'dui',
    '征凶，无攸利。',
    '归妹，天地之大义也。天地不交，而万物不兴。',
    {
      summary: '此卦象征少女出嫁之象。泽上有雷，归嫁之象。宜谨慎行事，不宜冒进。',
      career: '事业可能有变动，需谨慎。',
      relationship: '感情可能有变化，需注意分寸。',
      health: '注意情绪调节，保持平和。',
      wealth: '财务不宜冒险，保守为宜。'
    },
    [
      { position: 1, name: '初九', text: '归妹以娣，跛能履，征吉。', interpretation: '少女出嫁做妾，跛脚能走路，前往吉祥。' },
      { position: 2, name: '九二', text: '眇能视，利幽人之贞。', interpretation: '眼盲能看，利于隐士守正。' },
      { position: 3, name: '六三', text: '归妹以须，反归以娣。', interpretation: '少女出嫁等待，返回做妾。' },
      { position: 4, name: '九四', text: '归妹愆期，迟归有时。', interpretation: '少女出嫁延期，晚嫁有时机。' },
      { position: 5, name: '六五', text: '帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉。', interpretation: '帝乙嫁女，君夫人的衣袖不如妾的衣袖好，月亮接近满月，吉祥。' },
      { position: 6, name: '上六', text: '女承筐无实，士刲羊无血，无攸利。', interpretation: '女子捧筐没有实物，男子杀羊没有血，无所利益。' }
    ]
  ),
  H(55, '雷火丰', '䷶', 'zhen', 'li',
    '亨，王假之，勿忧，宜日中。',
    '丰，大也。明以动，故丰。',
    {
      summary: '此卦象征丰盛盛大之象。雷电皆至，光明盛大。宜把握时机，大展宏图。',
      career: '事业鼎盛，大有成就。',
      relationship: '感情热烈，丰盛美满。',
      health: '精力充沛，状态良好。',
      wealth: '财运亨通，收入丰厚。'
    },
    [
      { position: 1, name: '初九', text: '遇其配主，虽旬无咎，往有尚。', interpretation: '遇到他的配偶主人，虽然十天无灾祸，前往有尊崇。' },
      { position: 2, name: '六二', text: '丰其蔀，日中见斗，往得疑疾，有孚发若，吉。', interpretation: '丰盛遮蔽，中午见到北斗星，前往得到疑病，有诚信启发，吉祥。' },
      { position: 3, name: '九三', text: '丰其沛，日中见沫，折其右肱，无咎。', interpretation: '丰盛遮蔽，中午见到小星，折断右臂，无灾祸。' },
      { position: 4, name: '九四', text: '丰其蔀，日中见斗，遇其夷主，吉。', interpretation: '丰盛遮蔽，中午见到北斗星，遇到他的平辈主人，吉祥。' },
      { position: 5, name: '六五', text: '来章，有庆誉，吉。', interpretation: '来有文采，有喜庆赞誉，吉祥。' },
      { position: 6, name: '上六', text: '丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。', interpretation: '丰盛房屋，遮蔽家庭，从门缝看，寂静无人，三年不见人，凶险。' }
    ]
  ),
  H(56, '火山旅', '䷷', 'li', 'gen',
    '小亨，旅贞吉。',
    '旅，小亨，柔得中乎外，而顺乎刚，止而丽乎明。',
    {
      summary: '此卦象征旅行羁旅之象。山上有火，行旅不止。宜谨慎出行，随遇而安。',
      career: '事业可能有变动，需灵活应对。',
      relationship: '感情不稳定，需多沟通。',
      health: '注意出行安全，避免劳累。',
      wealth: '财务不稳定，需谨慎理财。'
    },
    [
      { position: 1, name: '初六', text: '旅琐琐，斯其所取灾。', interpretation: '旅行琐碎，这是他自取灾祸。' },
      { position: 2, name: '六二', text: '旅即次，怀其资，得童仆贞。', interpretation: '旅行到客舍，怀藏资财，得到童仆守正。' },
      { position: 3, name: '九三', text: '旅焚其次，丧其童仆，贞厉。', interpretation: '旅行烧掉客舍，丧失童仆，守正危险。' },
      { position: 4, name: '九四', text: '旅于处，得其资斧，我心不快。', interpretation: '旅行停留，得到资财斧头，我心不快乐。' },
      { position: 5, name: '六五', text: '射雉一矢亡，终以誉命。', interpretation: '射野鸡丢失一支箭，最终得到赞誉命令。' },
      { position: 6, name: '上九', text: '鸟焚其巢，旅人先笑后号咷，丧牛于易，凶。', interpretation: '鸟烧掉巢穴，旅人先笑后哭，在田畔丢失牛，凶险。' }
    ]
  ),
  H(57, '巽为风', '䷸', 'xun', 'xun',
    '小亨，利有攸往，利见大人。',
    '巽，入也。刚巽乎中正而志行，柔皆顺乎刚。',
    {
      summary: '此卦象征顺从渗透之象。两风相重，无孔不入。宜顺势而为，谦逊行事。',
      career: '事业宜顺应形势，灵活变通。',
      relationship: '感情需互相包容，谦逊相处。',
      health: '注意呼吸系统，保持通风。',
      wealth: '财运平稳，需耐心经营。'
    },
    [
      { position: 1, name: '初六', text: '进退，利武人之贞。', interpretation: '进退不定，利于武人守正。' },
      { position: 2, name: '九二', text: '巽在床下，用史巫纷若，吉无咎。', interpretation: '顺从在床下，用史官巫师纷纷，吉祥无灾祸。' },
      { position: 3, name: '九三', text: '频巽，吝。', interpretation: '频繁顺从，有憾惜。' },
      { position: 4, name: '六四', text: '悔亡，田获三品。', interpretation: '悔恨消失，田猎获得三种物品。' },
      { position: 5, name: '九五', text: '贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。', interpretation: '守正吉祥悔恨消失，无所不利。没有开始有结果，庚前三日，庚后三日，吉祥。' },
      { position: 6, name: '上九', text: '巽在床下，丧其资斧，贞凶。', interpretation: '顺从在床下，丧失资财斧头，守正凶险。' }
    ]
  ),
  H(58, '兑为泽', '䷹', 'dui', 'dui',
    '亨，利贞。',
    '兑，说也。刚中而柔外，说以利贞。',
    {
      summary: '此卦象征喜悦和乐之象。两泽相连，喜悦相通。宜和悦相处，广结善缘。',
      career: '事业顺利，人际关系和谐。',
      relationship: '感情和谐美满，喜悦甜蜜。',
      health: '心情愉悦，身心健康。',
      wealth: '财运顺畅，收入稳定。'
    },
    [
      { position: 1, name: '初九', text: '和兑，吉。', interpretation: '和悦，吉祥。' },
      { position: 2, name: '九二', text: '孚兑，吉，悔亡。', interpretation: '诚信喜悦，吉祥，悔恨消失。' },
      { position: 3, name: '六三', text: '来兑，凶。', interpretation: '来求喜悦，凶险。' },
      { position: 4, name: '九四', text: '商兑，未宁，介疾有喜。', interpretation: '商议喜悦，未安宁，有疾病有喜事。' },
      { position: 5, name: '九五', text: '孚于剥，有厉。', interpretation: '诚信于剥蚀，有危险。' },
      { position: 6, name: '上六', text: '引兑。', interpretation: '引导喜悦。' }
    ]
  ),
  H(59, '风水涣', '䷺', 'xun', 'kan',
    '亨。王假有庙，利涉大川，利贞。',
    '涣，亨。刚来而不穷，柔得位乎外而上同。',
    {
      summary: '此卦象征涣散离散之象。风行水上，涣散四方。宜化解矛盾，重新凝聚。',
      career: '事业可能有变动，需灵活应对。',
      relationship: '感情可能有疏离，需加强沟通。',
      health: '注意情绪调节，避免涣散。',
      wealth: '财务需重新规划，避免散乱。'
    },
    [
      { position: 1, name: '初六', text: '用拯马壮，吉。', interpretation: '用强壮的马拯救，吉祥。' },
      { position: 2, name: '九二', text: '涣奔其机，悔亡。', interpretation: '涣散奔向他的几案，悔恨消失。' },
      { position: 3, name: '六三', text: '涣其躬，无悔。', interpretation: '涣散他的身体，没有悔恨。' },
      { position: 4, name: '六四', text: '涣其群，元吉。涣有丘，匪夷所思。', interpretation: '涣散他的群体，大吉。涣散有丘陵，不是平常所能想。' },
      { position: 5, name: '九五', text: '涣汗其大号，涣王居，无咎。', interpretation: '涣散如汗他的大号令，涣散君王的居所，无灾祸。' },
      { position: 6, name: '上九', text: '涣其血，去逖出，无咎。', interpretation: '涣散他的血，远离出去，无灾祸。' }
    ]
  ),
  H(60, '水泽节', '䷻', 'kan', 'dui',
    '亨。苦节不可贞。',
    '节，止也。刚柔分，而刚得中。',
    {
      summary: '此卦象征节制适度之象。泽上有水，适度调节。宜有所节制，不可过度。',
      career: '事业需适度发展，不可冒进。',
      relationship: '感情需适度付出，不可过度。',
      health: '注意饮食起居有节，适度运动。',
      wealth: '财务需有计划，量入为出。'
    },
    [
      { position: 1, name: '初九', text: '不出户庭，无咎。', interpretation: '不出家门，无灾祸。' },
      { position: 2, name: '九二', text: '不出门庭，凶。', interpretation: '不出庭院门，凶险。' },
      { position: 3, name: '六三', text: '不节若，则嗟若，无咎。', interpretation: '不节制，则叹息，无灾祸。' },
      { position: 4, name: '六四', text: '安节，亨。', interpretation: '安于节制，亨通。' },
      { position: 5, name: '九五', text: '甘节，吉；往有尚。', interpretation: '甘美节制，吉祥；前往有尊崇。' },
      { position: 6, name: '上六', text: '苦节，贞凶，悔亡。', interpretation: '苦苦节制，守正凶险，悔恨消失。' }
    ]
  ),
  H(61, '风泽中孚', '䷼', 'xun', 'dui',
    '豚鱼吉，利涉大川，利贞。',
    '中孚，柔在内而刚得中。说而巽，孚，乃化邦也。',
    {
      summary: '此卦象征诚信感化之象。泽上有风，诚信感通。宜以诚待人，建立信任。',
      career: '事业需以诚信为本，建立良好信誉。',
      relationship: '感情需真诚相待，互相信任。',
      health: '身心需要诚信面对，积极调养。',
      wealth: '财务需诚信经营，稳步发展。'
    },
    [
      { position: 1, name: '初九', text: '虞吉，有它不燕。', interpretation: '安虞吉祥，有其他不安宁。' },
      { position: 2, name: '九二', text: '鸣鹤在阴，其子和之，我有好爵，吾与尔靡之。', interpretation: '鹤在阴处鸣叫，它的儿子应和，我有好酒，我与你共享。' },
      { position: 3, name: '六三', text: '得敌，或鼓或罢，或泣或歌。', interpretation: '得到敌人，或击鼓或停止，或哭泣或歌唱。' },
      { position: 4, name: '六四', text: '月几望，马匹亡，无咎。', interpretation: '月亮接近满月，马匹丢失，无灾祸。' },
      { position: 5, name: '九五', text: '有孚挛如，无咎。', interpretation: '有诚信紧密相连，无灾祸。' },
      { position: 6, name: '上九', text: '翰音登于天，贞凶。', interpretation: '鸡鸣声登于天，守正凶险。' }
    ]
  ),
  H(62, '雷山小过', '䷽', 'zhen', 'gen',
    '亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。',
    '小过，小者过也。过以利贞，与时行也。',
    {
      summary: '此卦象征小有过越之象。山上有雷，小有过失。宜谨慎小事，不可大意。',
      career: '事业宜谨慎行事，不可冒进。',
      relationship: '感情需注意细节，避免小过失。',
      health: '注意小病小恙，及时调理。',
      wealth: '财务需注意小开支，积少成多。'
    },
    [
      { position: 1, name: '初六', text: '飞鸟以凶。', interpretation: '飞鸟因此凶险。' },
      { position: 2, name: '六二', text: '过其祖，遇其妣；不及其君，遇其臣；无咎。', interpretation: '越过他的祖父，遇到他的祖母；不及他的君王，遇到他的臣子；无灾祸。' },
      { position: 3, name: '九三', text: '弗过防之，从或戕之，凶。', interpretation: '不过分防备它，跟随或许杀害它，凶险。' },
      { position: 4, name: '九四', text: '无咎，弗过遇之。往厉必戒，勿用永贞。', interpretation: '无灾祸，不过分遇到它。前往危险必须戒备，不要永远守正。' },
      { position: 5, name: '六五', text: '密云不雨，自我西郊，公弋取彼在穴。', interpretation: '密云不下雨，来自我西郊，公侯射取它在洞穴中。' },
      { position: 6, name: '上六', text: '弗遇过之，飞鸟离之，凶，是谓灾眚。', interpretation: '不遇到而越过它，飞鸟离开它，凶险，这叫做灾祸。' }
    ]
  ),
  H(63, '水火既济', '䷾', 'kan', 'li',
    '亨，小利贞，初吉终乱。',
    '既济，亨，小者亨也。利贞，刚柔正而位当也。',
    {
      summary: '此卦象征事已成之象。水在火上，烹饪成功。宜居安思危，防微杜渐。',
      career: '事业已成功，需保持谨慎。',
      relationship: '感情圆满，需珍惜维护。',
      health: '身体状态良好，需保持。',
      wealth: '财运亨通，需稳健理财。'
    },
    [
      { position: 1, name: '初九', text: '曳其轮，濡其尾，无咎。', interpretation: '拖曳车轮，沾湿尾巴，无灾祸。' },
      { position: 2, name: '六二', text: '妇丧其茀，勿逐，七日得。', interpretation: '妇人丢失她的车帘，不要追逐，七天后得到。' },
      { position: 3, name: '九三', text: '高宗伐鬼方，三年克之，小人勿用。', interpretation: '高宗征伐鬼方，三年攻克它，小人不可用。' },
      { position: 4, name: '六四', text: '繻有衣袽，终日戒。', interpretation: '彩绸有破衣，整天戒备。' },
      { position: 5, name: '九五', text: '东邻杀牛，不如西邻之禴祭，实受其福。', interpretation: '东邻杀牛祭祀，不如西邻的薄祭，实在受到它的福气。' },
      { position: 6, name: '上六', text: '濡其首，厉。', interpretation: '沾湿头部，危险。' }
    ]
  ),
  H(64, '火水未济', '䷿', 'li', 'kan',
    '亨，小狐汔济，濡其尾，无攸利。',
    '未济，亨，柔得中也。小狐汔济，未出中也。',
    {
      summary: '此卦象征事未成之象。火在水上，未能烹饪。宜坚持努力，终将成功。',
      career: '事业尚未成功，需继续努力。',
      relationship: '感情尚未成熟，需耐心培养。',
      health: '身体尚未康复，需继续调养。',
      wealth: '财运尚未到来，需坚持等待。'
    },
    [
      { position: 1, name: '初六', text: '濡其尾，吝。', interpretation: '沾湿尾巴，有憾惜。' },
      { position: 2, name: '九二', text: '曳其轮，贞吉。', interpretation: '拖曳车轮，守正吉祥。' },
      { position: 3, name: '六三', text: '未济，征凶，利涉大川。', interpretation: '未能渡过，前往凶险，利于渡越大河。' },
      { position: 4, name: '九四', text: '贞吉，悔亡，震用伐鬼方，三年有赏于大国。', interpretation: '守正吉祥，悔恨消失，震动用于征伐鬼方，三年有赏于大国。' },
      { position: 5, name: '六五', text: '贞吉，无悔，君子之光，有孚，吉。', interpretation: '守正吉祥，没有悔恨，君子的光辉，有诚信，吉祥。' },
      { position: 6, name: '上九', text: '有孚于饮酒，无咎，濡其首，有孚失是。', interpretation: '有诚信于饮酒，无灾祸，沾湿头部，有诚信失去正道。' }
    ]
  )
]

export function getHexagramById(id) {
  return HEXAGRAMS.find(h => h.id === id) || null
}

export function getHexagramByTrigrams(upperId, lowerId) {
  return HEXAGRAMS.find(h => h.upperTrigram === upperId && h.lowerTrigram === lowerId) || null
}

export function searchHexagrams(keyword) {
  const kw = keyword.toLowerCase()
  return HEXAGRAMS.filter(h =>
    h.name.includes(kw) ||
    h.judgment.includes(kw) ||
    h.number === parseInt(keyword)
  )
}
