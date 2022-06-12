const books = [
    {
        'title': 2022,
        'items': [
            {
                'title': ['Steve Jobs', '史蒂夫·乔布斯传'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1313501697l/11297044.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1313501697l/11297044.jpg'
                ],
                'author': ['Walter Isaacson', '沃尔特·艾萨克森']
            },
            {
                'title': ['Bad Blood', '恶血'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563822235l/41304176._SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563822235l/41304176._SY475_.jpg'
                ],
                'author': ['John Carreyrou', '约翰·卡里鲁']
            },
            {
                'title': ['A Man Called Ove', '一个叫欧维的男人'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389203193l/20492604.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582685622l/51691420._SX318_.jpg'
                ],
                'author': ['Fredrik Backman', '弗雷德里克·巴克曼']
            }
        ]
    },
    {
        'title': 2021,
        'items': [
            {
                'title': ['Anxious People', '焦虑的人'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594234890l/53799686._SX318_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631182883l/58956221._SX318_.jpg'
                ],
                'author': ['Fredrik Backman', '弗雷德里克·巴克曼']
            },
            {
                'title': ['The Forgotten Village', '六里庄遗事'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551281544l/44152880.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551281544l/44152880.jpg'
                ],
                'author': ['Dong Dong Qiang', '东东枪']
            },
            {
                'title': ['The Midnight Library', '午夜图书馆'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1620206792l/57120582._SX318_.jpg'
                ],
                'author': ['Matt Haig', '麦特·海格']
            },
            {
                'title': ['The Handmaid\'s Tale', '使女的故事'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618403388l/45864574._SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332442058l/13556813.jpg'
                ],
                'author': ['Margaret Atwood', '玛格丽特·阿特伍德']
            },
            {
                'title': ['Ordered', '受命'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618396718l/57736665._SX318_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618396718l/57736665._SX318_.jpg'
                ],
                'author': ['Zhi An', '止庵']
            },
            {
                'title': ['Grocery Store', '南货店'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596438207l/54797378._SX318_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596438207l/54797378._SX318_.jpg'
                ],
                'author': ['Zhang Ji', '张忌']
            },
            {
                'title': ['Paper Towns', '纸镇'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349013763l/8123162.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568084857l/53024916._SX318_SY475_.jpg'
                ],
                'author': ['John Green', '约翰·格林']
            },
            {
                'title': [
                    'Fly Already',
                    '银河系边缘的小失常'
                ],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550156201l/44009977._SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609782872l/56553602._SY475_.jpg'
                ],
                'author': [
                    'Etgar Keret',
                    '埃特加·凯雷特'
                ]
            },
            {
                'title': [
                    'Horizon, Bright Moon, Saber',
                    '小李飞刀4：天涯·明月·刀'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264872l/19273971.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264872l/19273971.jpg'],
                'author': [
                    'Gu Long',
                    '古龙']
            },
            {
                'title': [
                    'Know My Name',
                    '知晓我姓名'
                ],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567616805l/49944910._SX318_SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608824566l/56399805._SX318_.jpg'
                ],
                'author': [
                    'Chanel Miller',
                    '香奈儿·米勒'
                ]
            },
            {
                'title': [
                    'Moonflower Murders',
                    'Moonflower Murders'
                ],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599756269l/51456186._SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599756269l/51456186._SY475_.jpg'
                ],
                'author': [
                    'Anthony Horowitz',
                    '安东尼·霍洛维茨'
                ]
            },
            {
                'title': [
                    'Magpie Murders',
                    '喜鹊谋杀案'
                ],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482092109l/32970179._SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482092109l/32970179._SY475_.jpg'
                ],
                'author': [
                    'Anthony Horowitz',
                    '安东尼·霍洛维茨'
                ]
            }]
    },
    {
        'title': 2020,
        'items': [
            {
                'title': ['Fang Si-Chi\'s First Love Paradise', '房思琪的初恋乐园'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564889971l/41057632._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564889971l/41057632._SX318_.jpg'],
                'author': ['Lin Yi-han', '林奕含']
            },
            {
                'title': ['Lockdown', '封锁'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587570422l/53244954._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587570422l/53244954._SY475_.jpg'],
                'author': ['Peter May', '彼得·梅']
            },
            {
                'title': ['Eagle Soaring in the Ninth Month', '小李飞刀3：九月鹰飞'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264968l/18925019.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264968l/18925019.jpg'],
                'author': ['Gu Long', '古龙']
            },
            {
                'title': ['Shut Up and Listen!', 'Shut Up and Listen!'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554889716l/45013646._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554889716l/45013646._SY475_.jpg'],
                'author': ['Tilman Fertitta', 'Tilman Fertitta']
            },
            {
                'title': ['Bordertown Wanderer', '小李飞刀2：边城浪子'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265148l/18925016.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265148l/18925016.jpg'],
                'author': ['Gu Long', '古龙']
            },
            {
                'title': ['Sentimental Swordsman, Ruthless Sword', '小李飞刀1：多情剑客无情剑'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265059l/18930869._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265059l/18930869._SX318_.jpg'],
                'author': ['Gu Long', '古龙']
            },
            {
                'title': ['Mastery', 'Mastery'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488671791l/34463946._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488671791l/34463946._SX318_.jpg'],
                'author': ['George Leonard', 'George Leonard']
            },
            {
                'title': ["Ender's Game", "安德的游戏"],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452898522l/8045789.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452898522l/8045789.jpg'],
                'author': ['Orson Scott Card', '奥森·斯科特·卡德']
            },
            {
                'title': ['Shark\'s Fin and Sichuan Pepper', '鱼翅与花椒'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553006363l/44536316._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553006363l/44536316._SY475_.jpg'],
                'author': ['Fuchsia Dunlop', '扶霞·邓洛普']
            },
            {
                'title': ['Like Father, Like Son', '如父如子'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525401730l/40033086._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525401730l/40033086._SX318_.jpg'],
                'author': ['Hirokazu Koreeda', '是枝裕和']
            },
            {
                'title': ['82年生的金智英', '82年生的金智英'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570377823l/53114821._SX318_SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570377823l/53114821._SX318_SY475_.jpg'],
                'author': ['Cho Nam-Joo', 'Cho Nam-Joo']
            },
            {
                'title': ['Diary of an AssCan', 'Diary of an AssCan'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526997647l/26852117.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526997647l/26852117.jpg'],
                'author': ['Andy Weir', 'Andy Weir']
            },
            {
                'title': ['The Martian', '火星救援'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377968571l/18401393.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377968571l/18401393.jpg'],
                'author': ['Andy Weir', '安迪·威尔']
            },
            {
                'title': ['最后的耍猴人', '最后的耍猴人'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424008386l/24940477.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424008386l/24940477.jpg'],
                'author': ['马宏杰', '马宏杰']
            },
            {
                'title': ['克莱因壶', '克莱因壶'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572404088l/48640357._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572404088l/48640357._SX318_.jpg'],
                'author': ['冈岛二人', '冈岛二人']
            },
            {
                'title': ['坏小孩', '坏小孩'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560300097l/30642373.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560300097l/30642373.jpg'],
                'author': ['紫金陈', '紫金陈']
            },
            {
                'title': ['The Devil Wears Prada', '穿普拉达的女王'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525283199l/40024758.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525283199l/40024758.jpg'],
                'author': ['Lauren Weisberger', '萝伦·薇丝柏格']
            },
            {
                'title': ['Delivered from Distraction', 'Delivered from Distraction'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394607958l/19895671.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394607958l/19895671.jpg'],
                'author': ['Edward M. Hallowell and John J. Ratey', 'Edward M. Hallowell and John J. Ratey']
            },
            {
                'title': ['Educated', 'Educated'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609778195l/36247169._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609778195l/36247169._SY475_.jpg'],
                'author': ['Tara Westover', 'Tara Westover']
            }]
    },
    {
        'title': 2019,
        'items': [
            {
                'title': ['Driven to Distraction', 'Driven to Distraction'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388187952l/18712223.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388187952l/18712223.jpg'],
                'author': ['Edward M. Hallowell and John J. Ratey', 'Edward M. Hallowell and John J. Ratey']
            },
            {
                'title': ['长安十二时辰', '长安十二时辰'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488352112l/34437247._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488352112l/34437247._SX318_.jpg'],
                'author': ['Ma Boyong', 'Ma Boyong']
            },
            {
                'title': ['The Phoenix Project', '凤凰项目'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516785582l/38191426._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516785582l/38191426._SY475_.jpg'],
                'author': ['Gene Kim, Kevin Behr, and George Spafford', 'Gene Kim, Kevin Behr, and George Spafford']
            },
            {
                'title': ['The Girl with Seven Names', 'The Girl with Seven Names'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495994007l/35248097._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495994007l/35248097._SY475_.jpg'],
                'author': ['Hyeonseo Lee', 'Hyeonseo Lee']
            },
            {
                'title': ['Ready Player One', '头号玩家'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390275705l/20603758.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390275705l/20603758.jpg'],
                'author': ['Ernest Cline', '恩斯特·克莱恩']
            },
            {
                'title': ['Sleep', 'Sleep'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507696286l/36390562._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507696286l/36390562._SY475_.jpg'],
                'author': ['Nick Littlehales', 'Nick Littlehales']
            },
            {
                'title': ['三体', '三体'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552877666l/44490300.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552877666l/44490300.jpg'],
                'author': ['刘慈欣', '刘慈欣']
            },
            {
                'title': ['How to Stop Worrying and Start Living', '人性的优点'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129098l/4866._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129098l/4866._SY475_.jpg'],
                'author': ['Dale Carnegie', '戴尔·卡耐基']
            },
            {
                'title': ['到了南半球，一切都变了', '到了南半球，一切都变了'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559976411l/46207890._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559976411l/46207890._SX318_.jpg'],
                'author': ['刘小顺', '刘小顺']
            },
            {
                'title': ['How to Win Friends and Influence People', '人性的弱点'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SY475_.jpg'],
                'author': ['Dale Carnegie', '戴尔·卡耐基']
            },
            {
                'title': ['流浪地球', '流浪地球'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535086444l/41445419._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535086444l/41445419._SY475_.jpg'],
                'author': ['刘慈欣', '刘慈欣']
            },
            {
                'title': ['Watch Dogs The DedSec Revenge', 'Watch Dogs The DedSec Revenge'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445984702l/27310755._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445984702l/27310755._SY475_.jpg'],
                'author': ['Innovate Media', 'Innovate Media']
            }]
    },
    {
        'title': 2018,
        'items': [
            {
                'title': ['Allegiant', '忠诚者'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395582745l/18710190.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395582745l/18710190.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            },
            {
                'title': ['The World of Divergent', 'The World of Divergent'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376880754l/17860199.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376880754l/17860199.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            },
            {
                'title': ['Insurgent', '反叛者'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1324015626l/13068756.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1324015626l/13068756.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            }]
    },
    {
        'title': 2017,
        'items': [
            {
                'title': ['Free Four', 'Free Four'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342596743l/15743053.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342596743l/15743053.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            },
            {
                'title': ['Daily Life in the Roman City', 'Daily Life in the Roman City'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328813293l/6377286.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328813293l/6377286.jpg'],
                'author': ['Gregory S. Aldrete', 'Gregory S. Aldrete']
            },
            {
                'title': ['Divergent', '分歧者'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1374773761l/9717320.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1374773761l/9717320.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            },
            {
                'title': ['The Fever Code', 'The Fever Code'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450916936l/28285244._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450916936l/28285244._SY475_.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Kill Order', 'The Kill Order'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342539117l/13091429.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342539117l/13091429.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Death Cure', 'The Death Cure'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1304015333l/11162293.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1304015333l/11162293.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['Thomas’s First Memory of the Flare', 'Thomas’s First Memory of the Flare'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328589200l/12878132.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328589200l/12878132.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Scorch Trials', 'The Scorch Trials'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327972472l/8587084.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327972472l/8587084.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Maze Runner', 'The Maze Runner'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339111530l/8044584.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339111530l/8044584.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['Harry Potter and the Deathly Hallows', '哈利·波特与死亡圣器'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449590443l/28143118._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449590443l/28143118._SY475_.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            }]
    },
    {
        'title': 2016,
        'items': [
            {
                'title': ['Harry Potter and the Half-Blood Prince', '哈利·波特与“混血王子”'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Harry Potter and the Order of the Phoenix', '哈利·波特与凤凰社'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449602534l/28144751._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449602534l/28144751._SY475_.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Quantum Break: Zero State', 'Quantum Break: Zero State'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459395480l/29746347._SX318_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459395480l/29746347._SX318_.jpg'],
                'author': ['Cam Rogers', 'Cam Rogers']
            },
            {
                'title': ['Harry Potter and the Goblet of Fire', '哈利·波特与火焰杯'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492616888l/28137887._SY475_.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492616888l/28137887._SY475_.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Harry Potter and the Prisoner of Azkaban', '哈利·波特与阿兹卡班囚徒'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335037879l/13611643.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335037879l/13611643.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Harry Potter and the Chamber of Secrets', '哈利·波特与密室'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334525819l/13603662.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334525819l/13603662.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ["Harry Potter and the Sorcerer's Stone", "哈利·波特与魔法石"],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333153083l/13562891.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333153083l/13562891.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Third Culture Kids', 'Third Culture Kids'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389502301l/121920.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389502301l/121920.jpg'],
                'author': ['David C. Pollock and Ruth E. van Reken', 'David C. Pollock and Ruth E. van Reken']
            },
            {
                'title': ['My Two Moms', 'My Two Moms'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394283923l/18040366.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394283923l/18040366.jpg'],
                'author': ['Zach Wahls', 'Zach Wahls']
            },
            {
                'title': ['A Sociology of Family Life', 'A Sociology of Family Life'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375674333l/13762956.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375674333l/13762956.jpg'],
                'author': ['Deborah Chambers', 'Deborah Chambers']
            },
            {
                'title': ['How We Learn', 'How We Learn'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405136856l/22711288.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405136856l/22711288.jpg'],
                'author': ['Benedict Carey', 'Benedict Carey']
            }]
    },
    {
        'title': 2015,
        'items': [
            {
                'title': ['Having Our Say', 'Having Our Say'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385942795l/19091194.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385942795l/19091194.jpg'],
                'author': ['Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth', 'Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth']
            },
            {
                'title': ['解忧杂货店', '解忧杂货店'],
                'image': ['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424481746l/24982941.jpg', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424481746l/24982941.jpg'],
                'author': ['Keigo Higashino', 'Keigo Higashino']
            }]
    },
    {
        'title': 2014,
        'items': [
            {
                'title': [
                    'The Longest Way',
                    '徒步中国'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341237180l/15732501.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386201299l/19190763.jpg'
                ],
                'author': [
                    'Christoph Rehage',
                    '雷克'
                ]
            }]
    },
    {
        'title': 2013,
        'items': [
            {
                'title': ['The Minority Report', '少数派报告'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390719396l/581125.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428242570l/25301536.jpg'
                ],
                'author': [
                    'Philip K. Dick',
                    '菲利普·狄克'
                ]
            },
            {
                'title': ['背包十年：我的职业是旅行', '背包十年：我的职业是旅行'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393091420l/18923585.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393091420l/18923585.jpg'
                ],
                'author': [
                    '小鹏',
                    '小鹏'
                ]
            },
            {
                'title': ['看见', '看见'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408458884l/18458655.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408458884l/18458655.jpg'
                ],
                'author': [
                    '柴静',
                    '柴静'
                ]
            },
            {
                'title': ['Mockingjay', '饥饿游戏3：嘲笑鸟'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722918l/7260188._SY475_.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722918l/7260188._SY475_.jpg'
                ],
                'author': [
                    'Suzanne Collins',
                    '苏珊·柯林斯'
                ]
            },
            {
                'title': ['Catching Fire', '饥饿游戏2：燃烧的女孩'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722941l/6148028.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722941l/6148028.jpg'
                ],
                'author': [
                    'Suzanne Collins',
                    '苏珊·柯林斯'
                ]
            },
            {
                'title': ['The Hunger Games', '饥饿游戏'],
                'image': [
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg',
                    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg'
                ],
                'author': [
                    'Suzanne Collins',
                    '苏珊·柯林斯'
                ]
            }
        ]
    }
]

export default books;