const books = [
    {
        'title': 2024,
        'items': [
            {
                'title': ['Brothers', '兄弟'],
                'image': ['images/books/Brothers.jpeg', 'images/books/BrothersCN.jpeg'],
                'author': ['Yu Hua', '余华']
            },
            {
                'title': ['Chronicle of a Blood Merchant', '许三观卖血记'],
                'image': ['images/books/ChronicleOfABloodMerchant.jpg', 'images/books/ChronicleOfABloodMerchantCN.jpeg'],
                'author': ['Yu Hua', '余华']
            },
            {
                'title': ['To Live', '活着'],
                'image': ['images/books/ToLive.jpeg', 'images/books/ToLiveCN.jpeg'],
                'author': ['Yu Hua', '余华']
            },
            {
                'title': ['I Deliver Express in Beijing', '我在北京送快递'],
                'image': ['images/books/IDeliverExpressInBeijing.jpeg', 'images/books/IDeliverExpressInBeijing.jpeg'],
                'author': ['Hu Anyan', '胡安焉']
            },
            {
                'title': ['The Pragmatic Programmer', '程序员修炼之道'],
                'image': ['images/books/ThePragmaticProgrammer.jpeg', 'images/books/ThePragmaticProgrammer.jpeg'],
                'author': ['David Thomas and Andrew Hunt', 'David Thomas and Andrew Hunt']
            },
        ]
    },
    {
        'title': 2023,
        'items': [
            {
                'title': ['Strange Stones', '奇石'],
                'image': ['images/books/StrangeStones.jpeg', 'images/books/StrangeStonesCN.jpeg'],
                'author': ['Peter Hessler', '何伟']
            },
            {
                'title': ['River Town', '江城'],
                'image': ['images/books/RiverTown.jpeg', 'images/books/RiverTownCN.jpeg'],
                'author': ['Peter Hessler', '何伟']
            },
            {
                'title': ['Country Driving', '寻路中国'],
                'image': ['images/books/CountryDriving.jpeg', 'images/books/CountryDrivingCN.jpeg'],
                'author': ['Peter Hessler', '何伟']
            },
            {
                'title': ['I Need to Survive', '我要活下去'],
                'image': ['images/books/INeedToSurvive.jpeg', 'images/books/INeedToSurvive.jpeg'],
                'author': ['Kim Tak-Hwan', '金琸桓']
            },
            {
                'title': ['The Return of the King', '王者归来'],
                'image': ['images/books/TheReturnOfTheKing.jpeg', 'images/books/TheReturnOfTheKing.jpeg'],
                'author': ['J. R. R. Tolkien', 'J·R·R·托尔金']
            },
            {
                'title': ['The Two Towers', '双塔奇兵'],
                'image': ['images/books/TheTwoTowers.jpeg', 'images/books/TheTwoTowers.jpeg'],
                'author': ['J. R. R. Tolkien', 'J·R·R·托尔金']
            },
            {
                'title': ['The Fellowship of the Ring', '护戒使者'],
                'image': ['images/books/TheFellowshipOfTheRing.jpeg', 'images/books/TheFellowshipOfTheRing.jpeg'],
                'author': ['J. R. R. Tolkien', 'J·R·R·托尔金']
            },
            {
                'title': ['The Hobbit', '霍比特人'],
                'image': ['images/books/TheHobbit.jpeg', 'images/books/TheHobbit.jpeg'],
                'author': ['J. R. R. Tolkien', 'J. R. R. Tolkien']
            },
            {
                'title': ['After My Wife Died', '妻子的后事'],
                'image': ['images/books/AfterMyWifeDied.jpg', 'images/books/AfterMyWifeDied.jpg'],
                'author': ['坂井希久子', '坂井希久子']
            },
            {
                'title': ['No Hard Feelings', '我工作，我没有不开心'],
                'image': ['images/books/NoHardFeelings.jpg', 'images/books/NoHardFeelings.jpg'],
                'author': ['Liz Fosslien / Mollie West Duffy', 'Liz Fosslien / Mollie West Duffy']
            },
            {
                'title': ['I Am Malala', '我是马拉拉'],
                'image': ['images/books/IAmMalala.jpeg', 'images/books/IAmMalala.jpeg'],
                'author': ['Malala Yousafzai', '马拉拉·优素福·扎伊']
            },
            {
                'title': ['The Coding Career Handbook', 'The Coding Career Handbook'],
                'image': ['images/books/TheCodingCareerHandbook.jpeg', 'images/books/TheCodingCareerHandbook.jpeg'],
                'author': ['Shawn Swyx Wang', 'Shawn Swyx Wang']
            },
            {
                'title': ['Alan Wake', '心灵杀手'],
                'image': ['images/books/AlanWake.jpg', 'images/books/AlanWake.jpg'],
                'author': ['Rick Burroughs', 'Rick Burroughs']
            },
            {
                'title': ['Qiu Yuan', '秋园'],
                'image': ['images/books/QiuYuan.jpg', 'images/books/QiuYuan.jpg'],
                'author': ['Yang Benfen', '杨本芬']
            },
            {
                'title': ['The Litchi Road', '长安的荔枝'],
                'image': ['images/books/TheLitchiRoad.jpeg', 'images/books/TheLitchiRoad.jpeg'],
                'author': ['Ma Boyong', '马伯庸']
            },
            {
                'title': [
                    'UGVybWFuZW50IFJlY29yZA==',
                    '5rC45LmF6K6w5b2V'],
                'image': [
                    'aW1hZ2VzL2Jvb2tzL1VHVnliV0Z1Wlc1MElGSmxZMjl5WkE9PS5qcGc=',
                    'aW1hZ2VzL2Jvb2tzL1VHVnliV0Z1Wlc1MElGSmxZMjl5WkE9PS5qcGc='
                ],
                'author': [
                    'RWR3YXJkIFNub3dkZW4=',
                    '54ix5b635Y2Owrfmlq/or7rnmbs='
                ],
                'isBase64': true
            },
            {
                'title': ['Artemis', '月球城市'],
                'image': ['images/books/Artemis.jpeg', 'images/books/Artemis.jpeg'],
                'author': ['Andy Weir', '安迪·威尔']
            },
            {
                'title': [
                    'The Compound Effect',
                    '复利效应'],
                'image': [
                    'images/books/TheCompoundEffect.jpg',
                    'images/books/TheCompoundEffect.jpg'
                ],
                'author': [
                    'Darren Hardy',
                    'Darren Hardy'
                ]
            },
            {
                'title': ['Project Hail Mary', '挽救计划'],
                'image': ['images/books/ProjectHailMary.jpeg', 'images/books/ProjectHailMaryCN.jpeg'],
                'author': ['Andy Weir', '安迪·威尔']
            }
        ]
    },
    {
        'title': 2022,
        'items': [
            {
                'title': ['Sea Anemone', '海葵'],
                'image': [
                    'images/books/SeaAnemone.jpg',
                    'images/books/SeaAnemone.jpg'
                ],
                'author': ['Bei Ke Bang', '贝客邦']
            },
            {
                'title': ['We Were Dreamers', '我们都是追梦者'],
                'image': [
                    'images/books/WeWereDreamers.jpg',
                    'images/books/WeWereDreamers.jpg'
                ],
                'author': ['Simu Liu', '刘思慕']
            },
            {
                'title': ['Rich Dad Poor Dad', '富爸爸·穷爸爸'],
                'image': [
                    'images/books/RichDadPoorDad.jpg',
                    'images/books/RichDadPoorDad.jpg'
                ],
                'author': ['Robert T. Kiyosaki', '罗伯特·清崎']
            },
            {
                'title': ['Atomic Habits', 'Atomic Habits'],
                'image': [
                    'images/books/AtomicHabits.jpeg',
                    'images/books/AtomicHabits.jpeg'
                ],
                'author': ['James Clear', 'James Clear']
            },
            {
                'title': ['Selfish, Shallow, and Self-Absorbed', '最好的决定'],
                'image': [
                    'images/books/SelfishShallowAndSelfAbsorbed.jpeg',
                    'images/books/SelfishShallowAndSelfAbsorbedCN.jpeg'
                ],
                'author': ['Meghan Daum', '梅根·多姆']
            },
            {
                'title': ['Why We Sleep', '我们为什么要睡觉？'],
                'image': [
                    'images/books/WhyWeSleep.jpeg',
                    'images/books/WhyWeSleep.jpeg'
                ],
                'author': ['Matthew Walker', '马修·沃克']
            },
            {
                'title': ['Being Mortal', '最好的告别'],
                'image': [
                    'images/books/BeingMortal.jpeg',
                    'images/books/BeingMortalCN.jpeg'
                ],
                'author': ['Atul Gawande', '阿图·葛文德']
            },
            {
                'title': ['Midnight in Chernobyl', '切尔诺贝利的午夜'],
                'image': [
                    'images/books/MidnightInChernobyl.jpeg',
                    'images/books/MidnightInChernobylCN.jpg'
                ],
                'author': ['Adam Higginbotham', '亚当·希金博特姆']
            },
            {
                'title': ['Murder on the Orient Express', '东方快车谋杀案'],
                'image': [
                    'images/books/MurderOnTheOrientExpress.jpg',
                    'images/books/MurderOnTheOrientExpressCN.jpg'
                ],
                'author': ['Agatha Christie', '阿加莎·克里斯蒂']
            },
            {
                'title': ['And Then There Were None', '无人生还'],
                'image': [
                    'images/books/AndThenThereWereNone.jpg',
                    'images/books/AndThenThereWereNone.jpg'
                ],
                'author': ['Agatha Christie', '阿加莎·克里斯蒂']
            },
            {
                'title': ['Klara and the Sun', '克拉拉与太阳'],
                'image': [
                    'images/books/KlaraAndTheSun.jpg',
                    'images/books/KlaraAndTheSun.jpg'
                ],
                'author': ['Kazuo Ishiguro', '石黑一雄']
            },
            {
                'title': ['The Crimes That Bind', '祈祷落幕时'],
                'image': [
                    'images/books/TheCrimesThatBind.jpeg',
                    'images/books/TheCrimesThatBind.jpeg'
                ],
                'author': ['Keigo Higashino', '东野奎吾']
            },
            {
                'title': ['The Storied Life of A. J. Fikry', '岛上书店'],
                'image': [
                    'images/books/TheStoriedLifeOfAJFikry.jpg',
                    'images/books/TheStoriedLifeOfAJFikry.jpg'
                ],
                'author': ['Gabrielle Zevin', '嘉布莉·丽文']
            },
            {
                'title': ['Steve Jobs', '史蒂夫·乔布斯传'],
                'image': [
                    'images/books/SteveJobs.jpg',
                    'images/books/SteveJobs.jpg'
                ],
                'author': ['Walter Isaacson', '沃尔特·艾萨克森']
            },
            {
                'title': ['Bad Blood', '恶血'],
                'image': [
                    'images/books/BadBlood.jpg',
                    'images/books/BadBlood.jpg'
                ],
                'author': ['John Carreyrou', '约翰·卡里鲁']
            },
            {
                'title': ['A Man Called Ove', '一个叫欧维的男人'],
                'image': [
                    'images/books/AManCalledOve.jpg',
                    'images/books/AManCalledOveCN.jpg'
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
                    'images/books/AnxiousPeople.jpg',
                    'images/books/AnxiousPeopleCN.jpg'
                ],
                'author': ['Fredrik Backman', '弗雷德里克·巴克曼']
            },
            {
                'title': ['The Forgotten Village', '六里庄遗事'],
                'image': [
                    'images/books/TheForgottenVillage.jpg',
                    'images/books/TheForgottenVillage.jpg'
                ],
                'author': ['Dong Dong Qiang', '东东枪']
            },
            {
                'title': ['The Midnight Library', '午夜图书馆'],
                'image': [
                    'images/books/TheMidnightLibrary.jpg',
                    'images/books/TheMidnightLibraryCN.jpg'
                ],
                'author': ['Matt Haig', '麦特·海格']
            },
            {
                'title': ['The Handmaid\'s Tale', '使女的故事'],
                'image': [
                    'images/books/TheHandmaidsTale.jpg',
                    'images/books/TheHandmaidsTaleCN.jpg'
                ],
                'author': ['Margaret Atwood', '玛格丽特·阿特伍德']
            },
            {
                'title': ['Ordered', '受命'],
                'image': [
                    'images/books/Ordered.jpg',
                    'images/books/Ordered.jpg'
                ],
                'author': ['Zhi An', '止庵']
            },
            {
                'title': ['Grocery Store', '南货店'],
                'image': [
                    'images/books/GroceryStore.jpg',
                    'images/books/GroceryStore.jpg'
                ],
                'author': ['Zhang Ji', '张忌']
            },
            {
                'title': ['Paper Towns', '纸镇'],
                'image': [
                    'images/books/PaperTowns.jpg',
                    'images/books/PaperTownsCN.jpg'
                ],
                'author': ['John Green', '约翰·格林']
            },
            {
                'title': [
                    'Fly Already',
                    '银河系边缘的小失常'
                ],
                'image': [
                    'images/books/FlyAlready.jpg',
                    'images/books/FlyAlreadyCN.jpg'
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
                    'images/books/HorizonBrightMoonSaber.jpg',
                    'images/books/HorizonBrightMoonSaber.jpg'],
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
                    'images/books/KnowMyName.jpg',
                    'images/books/KnowMyNameCN.jpg'
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
                    'images/books/MoonflowerMurders.jpg',
                    'images/books/MoonflowerMurders.jpg'
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
                    'images/books/MagpieMurders.jpg',
                    'images/books/MagpieMurders.jpg'
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
                'image': ['images/books/FangSichisFirstLoveParadise.jpg', 'images/books/FangSichisFirstLoveParadise.jpg'],
                'author': ['Lin Yi-han', '林奕含']
            },
            {
                'title': ['Lockdown', '封锁'],
                'image': ['images/books/Lockdown.jpg', 'images/books/Lockdown.jpg'],
                'author': ['Peter May', '彼得·梅']
            },
            {
                'title': ['Eagle Soaring in the Ninth Month', '小李飞刀3：九月鹰飞'],
                'image': ['images/books/EagleSoaringInTheNinthMonth.jpg', 'images/books/EagleSoaringInTheNinthMonth.jpg'],
                'author': ['Gu Long', '古龙']
            },
            {
                'title': ['Shut Up and Listen!', 'Shut Up and Listen!'],
                'image': ['images/books/ShutUpAndListen.jpg', 'images/books/ShutUpAndListen.jpg'],
                'author': ['Tilman Fertitta', 'Tilman Fertitta']
            },
            {
                'title': ['Bordertown Wanderer', '小李飞刀2：边城浪子'],
                'image': ['images/books/BordertownWanderer.jpg', 'images/books/BordertownWanderer.jpg'],
                'author': ['Gu Long', '古龙']
            },
            {
                'title': ['Sentimental Swordsman, Ruthless Sword', '小李飞刀1：多情剑客无情剑'],
                'image': ['images/books/SentimentalSwordsmanRuthlessSword.jpg', 'images/books/SentimentalSwordsmanRuthlessSword.jpg'],
                'author': ['Gu Long', '古龙']
            },
            {
                'title': ['Mastery', 'Mastery'],
                'image': ['images/books/Mastery.jpg', 'images/books/Mastery.jpg'],
                'author': ['George Leonard', 'George Leonard']
            },
            {
                'title': ["Ender's Game", "安德的游戏"],
                'image': ['images/books/EndersGame.jpg', 'images/books/EndersGame.jpg'],
                'author': ['Orson Scott Card', '奥森·斯科特·卡德']
            },
            {
                'title': ['Shark\'s Fin and Sichuan Pepper', '鱼翅与花椒'],
                'image': ['images/books/SharksFinAndSichuanPepper.jpg', 'images/books/SharksFinAndSichuanPepper.jpg'],
                'author': ['Fuchsia Dunlop', '扶霞·邓洛普']
            },
            {
                'title': ['Like Father, Like Son', '如父如子'],
                'image': ['images/books/LikeFatherLikeSon.jpg', 'images/books/LikeFatherLikeSon.jpg'],
                'author': ['Hirokazu Koreeda', '是枝裕和']
            },
            {
                'title': ['Kim Ji-young, Born 1982', '82年生的金智英'],
                'image': ['images/books/KimJiyoungBorn1982.jpg', 'images/books/KimJiyoungBorn1982.jpg'],
                'author': ['Cho Nam-Joo', 'Cho Nam-Joo']
            },
            {
                'title': ['The Martian', '火星救援'],
                'image': ['images/books/TheMartian.jpg', 'images/books/TheMartian.jpg'],
                'author': ['Andy Weir', '安迪·威尔']
            },
            {
                'title': ['The Last Monkey Performer', '最后的耍猴人'],
                'image': ['images/books/TheLastMonkeyPerformer.jpg', 'images/books/TheLastMonkeyPerformer.jpg'],
                'author': ['马宏杰', '马宏杰']
            },
            {
                'title': ['Klein Bottle', '克莱因壶'],
                'image': ['images/books/KleinBottle.jpg', 'images/books/KleinBottle.jpg'],
                'author': ['冈岛二人', '冈岛二人']
            },
            {
                'title': ['Bad Kid', '坏小孩'],
                'image': ['images/books/BadKid.jpg', 'images/books/BadKid.jpg'],
                'author': ['紫金陈', '紫金陈']
            },
            {
                'title': ['The Devil Wears Prada', '穿普拉达的女王'],
                'image': ['images/books/TheDevilWearsPrada.jpg', 'images/books/TheDevilWearsPrada.jpg'],
                'author': ['Lauren Weisberger', '萝伦·薇丝柏格']
            },
            {
                'title': ['Delivered from Distraction', 'Delivered from Distraction'],
                'image': ['images/books/DeliveredFromDistraction.jpg', 'images/books/DeliveredFromDistraction.jpg'],
                'author': ['Edward M. Hallowell and John J. Ratey', 'Edward M. Hallowell and John J. Ratey']
            },
            {
                'title': ['Educated', 'Educated'],
                'image': ['images/books/Educated.jpg', 'images/books/Educated.jpg'],
                'author': ['Tara Westover', 'Tara Westover']
            }]
    },
    {
        'title': 2019,
        'items': [
            {
                'title': ['Driven to Distraction', 'Driven to Distraction'],
                'image': ['images/books/DrivenToDistraction.jpg', 'images/books/DrivenToDistraction.jpg'],
                'author': ['Edward M. Hallowell and John J. Ratey', 'Edward M. Hallowell and John J. Ratey']
            },
            {
                'title': ['The Longest Day In Chang\'an', '长安十二时辰'],
                'image': ['images/books/TheLongestDayInChangan.jpg', 'images/books/TheLongestDayInChangan.jpg'],
                'author': ['Ma Boyong', '马伯庸']
            },
            {
                'title': ['The Phoenix Project', '凤凰项目'],
                'image': ['images/books/ThePhoenixProject.jpg', 'images/books/ThePhoenixProject.jpg'],
                'author': ['Gene Kim, Kevin Behr, and George Spafford', 'Gene Kim, Kevin Behr, and George Spafford']
            },
            {
                'title': ['The Girl with Seven Names', 'The Girl with Seven Names'],
                'image': ['images/books/TheGirlWithSevenNames.jpg', 'images/books/TheGirlWithSevenNames.jpg'],
                'author': ['Hyeonseo Lee', 'Hyeonseo Lee']
            },
            {
                'title': ['Ready Player One', '头号玩家'],
                'image': ['images/books/ReadyPlayerOne.jpg', 'images/books/ReadyPlayerOne.jpg'],
                'author': ['Ernest Cline', '恩斯特·克莱恩']
            },
            {
                'title': ['Sleep', 'Sleep'],
                'image': ['images/books/Sleep.jpg', 'images/books/Sleep.jpg'],
                'author': ['Nick Littlehales', 'Nick Littlehales']
            },
            {
                'title': ['The Three-Body Problem', '三体'],
                'image': ['images/books/TheThreebodyProblem.jpg', 'images/books/TheThreebodyProblem.jpg'],
                'author': ['刘慈欣', '刘慈欣']
            },
            {
                'title': ['How to Stop Worrying and Start Living', '人性的优点'],
                'image': ['images/books/HowToStopWorryingAndStartLiving.jpg', 'images/books/HowToStopWorryingAndStartLiving.jpg'],
                'author': ['Dale Carnegie', '戴尔·卡耐基']
            },
            {
                'title': ['Reaching the Southern Hemisphere, Everything Changed', '到了南半球，一切都变了'],
                'image': ['images/books/ReachingTheSouthernHemisphereEverythingChanged.jpg', 'images/books/ReachingTheSouthernHemisphereEverythingChanged.jpg'],
                'author': ['刘小顺', '刘小顺']
            },
            {
                'title': ['How to Win Friends and Influence People', '人性的弱点'],
                'image': ['images/books/HowToWinFriendsAndInfluencePeople.jpg', 'images/books/HowToWinFriendsAndInfluencePeople.jpg'],
                'author': ['Dale Carnegie', '戴尔·卡耐基']
            },
            {
                'title': ['The Wandering Earth', '流浪地球'],
                'image': ['images/books/TheWanderingEarth.jpg', 'images/books/TheWanderingEarth.jpg'],
                'author': ['刘慈欣', '刘慈欣']
            },
            {
                'title': ['Watch Dogs The DedSec Revenge', 'Watch Dogs The DedSec Revenge'],
                'image': ['images/books/WatchDogsTheDedsecRevenge.jpg', 'images/books/WatchDogsTheDedsecRevenge.jpg'],
                'author': ['Innovate Media', 'Innovate Media']
            }]
    },
    {
        'title': 2018,
        'items': [
            {
                'title': ['Allegiant', '忠诚者'],
                'image': ['images/books/Allegiant.jpg', 'images/books/Allegiant.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            },
            {
                'title': ['Insurgent', '反叛者'],
                'image': ['images/books/Insurgent.jpg', 'images/books/Insurgent.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            }]
    },
    {
        'title': 2017,
        'items': [
            {
                'title': ['Daily Life in the Roman City', 'Daily Life in the Roman City'],
                'image': ['images/books/DailyLifeInTheRomanCity.jpg', 'images/books/DailyLifeInTheRomanCity.jpg'],
                'author': ['Gregory S. Aldrete', 'Gregory S. Aldrete']
            },
            {
                'title': ['Divergent', '分歧者'],
                'image': ['images/books/Divergent.jpg', 'images/books/Divergent.jpg'],
                'author': ['Veronica Roth', 'Veronica Roth']
            },
            {
                'title': ['The Fever Code', 'The Fever Code'],
                'image': ['images/books/TheFeverCode.jpg', 'images/books/TheFeverCode.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Complete Software Developer\'s Career Guide', 'The Complete Software Developer\'s Career Guide'],
                'image': ['images/books/TheCompleteSoftwareDevelopersCareerGuide.jpeg', 'images/books/TheCompleteSoftwareDevelopersCareerGuide.jpeg'],
                'author': ['John Sonmez', 'John Sonmez']
            },
            {
                'title': ['The Kill Order', 'The Kill Order'],
                'image': ['images/books/TheKillOrder.jpg', 'images/books/TheKillOrder.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Death Cure', 'The Death Cure'],
                'image': ['images/books/TheDeathCure.jpg', 'images/books/TheDeathCure.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Scorch Trials', 'The Scorch Trials'],
                'image': ['images/books/TheScorchTrials.jpg', 'images/books/TheScorchTrials.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['The Maze Runner', 'The Maze Runner'],
                'image': ['images/books/TheMazeRunner.jpg', 'images/books/TheMazeRunner.jpg'],
                'author': ['James Dashner', 'James Dashner']
            },
            {
                'title': ['Harry Potter and the Deathly Hallows', '哈利·波特与死亡圣器'],
                'image': ['images/books/HarryPotterAndTheDeathlyHallows.jpg', 'images/books/HarryPotterAndTheDeathlyHallows.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            }]
    },
    {
        'title': 2016,
        'items': [
            {
                'title': ['Harry Potter and the Half-Blood Prince', '哈利·波特与“混血王子”'],
                'image': ['images/books/HarryPotterAndTheHalfbloodPrince.jpg', 'images/books/HarryPotterAndTheHalfbloodPrince.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Harry Potter and the Order of the Phoenix', '哈利·波特与凤凰社'],
                'image': ['images/books/HarryPotterAndTheOrderOfThePhoenix.jpg', 'images/books/HarryPotterAndTheOrderOfThePhoenix.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Quantum Break: Zero State', 'Quantum Break: Zero State'],
                'image': ['images/books/QuantumBreakZeroState.jpg', 'images/books/QuantumBreakZeroState.jpg'],
                'author': ['Cam Rogers', 'Cam Rogers']
            },
            {
                'title': ['Harry Potter and the Goblet of Fire', '哈利·波特与火焰杯'],
                'image': ['images/books/HarryPotterAndTheGobletOfFire.jpg', 'images/books/HarryPotterAndTheGobletOfFire.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Harry Potter and the Prisoner of Azkaban', '哈利·波特与阿兹卡班囚徒'],
                'image': ['images/books/HarryPotterAndThePrisonerOfAzkaban.jpg', 'images/books/HarryPotterAndThePrisonerOfAzkaban.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Harry Potter and the Chamber of Secrets', '哈利·波特与密室'],
                'image': ['images/books/HarryPotterAndTheChamberOfSecrets.jpg', 'images/books/HarryPotterAndTheChamberOfSecrets.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ["Harry Potter and the Sorcerer's Stone", "哈利·波特与魔法石"],
                'image': ['images/books/HarryPotterAndTheSorcerersStone.jpg', 'images/books/HarryPotterAndTheSorcerersStone.jpg'],
                'author': ['J.K. Rowling', 'J·K·罗琳']
            },
            {
                'title': ['Third Culture Kids', 'Third Culture Kids'],
                'image': ['images/books/ThirdCultureKids.jpg', 'images/books/ThirdCultureKids.jpg'],
                'author': ['David C. Pollock and Ruth E. van Reken', 'David C. Pollock and Ruth E. van Reken']
            },
            {
                'title': ['My Two Moms', 'My Two Moms'],
                'image': ['images/books/MyTwoMoms.jpg', 'images/books/MyTwoMoms.jpg'],
                'author': ['Zach Wahls', 'Zach Wahls']
            },
            {
                'title': ['A Sociology of Family Life', 'A Sociology of Family Life'],
                'image': ['images/books/ASociologyOfFamilyLife.jpg', 'images/books/ASociologyOfFamilyLife.jpg'],
                'author': ['Deborah Chambers', 'Deborah Chambers']
            },
            {
                'title': ['How We Learn', 'How We Learn'],
                'image': ['images/books/HowWeLearn.jpg', 'images/books/HowWeLearn.jpg'],
                'author': ['Benedict Carey', 'Benedict Carey']
            }]
    },
    {
        'title': 2015,
        'items': [
            {
                'title': ['Having Our Say', 'Having Our Say'],
                'image': ['images/books/HavingOurSay.jpg', 'images/books/HavingOurSay.jpg'],
                'author': ['Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth', 'Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth']
            },
            {
                'title': ['Miracles of the Namiya General Store', '解忧杂货店'],
                'image': ['images/books/MiraclesOfTheNamiyaGeneralStore.jpg', 'images/books/MiraclesOfTheNamiyaGeneralStore.jpg'],
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
                    'images/books/TheLongestWay.jpg',
                    'images/books/TheLongestWayCN.jpg'
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
                'image': ['images/books/TheMinorityReport.jpeg', 'images/books/TheMinorityReportCN.jpeg'],
                'author': ['Philip K. Dick', '菲利普·狄克']
            },
            {
                'title': ['Ten Years of Backpacking', '背包十年'],
                'image': ['images/books/TenYearsOfBackpacking.jpeg', 'images/books/TenYearsOfBackpacking.jpeg'],
                'author': ['Xiao Peng', '小鹏']
            },
            {
                'title': ['Insight', '看见'],
                'image': ['images/books/Insight.jpeg', 'images/books/Insight.jpeg'],
                'author': ['Chai Jing', '柴静']
            },
            {
                'title': ['Mockingjay', '饥饿游戏3：嘲笑鸟'],
                'image': ['images/books/Mockingjay.jpg', 'images/books/Mockingjay.jpg'],
                'author': ['Suzanne Collins', '苏珊·柯林斯']
            },
            {
                'title': ['Catching Fire', '饥饿游戏2：燃烧的女孩'],
                'image': ['images/books/CatchingFire.jpeg', 'images/books/CatchingFire.jpeg'],
                'author': ['Suzanne Collins', '苏珊·柯林斯']
            },
            {
                'title': ['The Hunger Games', '饥饿游戏'],
                'image': ['images/books/TheHungerGames.jpeg', 'images/books/TheHungerGames.jpeg'],
                'author': ['Suzanne Collins', '苏珊·柯林斯']
            }
        ]
    }
]

export default books;