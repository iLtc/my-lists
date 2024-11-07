const books = [
    {
        title: 2024,
        items: [
            {
                title: ["Twelve Years a Slave", "为奴十二年"],
                image: ["TwelveYearsASlave.jpg", "TwelveYearsASlave.jpg"],
                author: ["Solomon Northup", "Solomon Northup"],
            },
            {
                title: ["Jony Ive", "乔尼·艾维"],
                image: ["JonyIve.jpg", "JonyIve.jpg"],
                author: ["Leander Kahney", "Leander Kahney"],
            },
            {
                title: [
                    "My Girlfriend Will Get Married Soon",
                    "与我十年长跑的女友明天要嫁人了",
                ],
                image: [
                    "MyGirlfriendWillGetMarriedSoon.jpg",
                    "MyGirlfriendWillGetMarriedSoon.jpg",
                ],
                author: ["Li Haibo", "李海波"],
            },
            {
                title: ["Here One Moment", "Here One Moment"],
                image: ["HereOneMoment.jpg", "HereOneMoment.jpg"],
                author: ["Liane Moriarty", "Liane Moriarty"],
            },
            {
                title: [
                    "All the Colors of the Dark",
                    "All the Colors of the Dark",
                ],
                image: [
                    "AllTheColorsOfTheDark.jpg",
                    "AllTheColorsOfTheDark.jpg",
                ],
                author: ["Chris Whitaker", "Chris Whitaker"],
            },
            {
                title: ["Paradise Travel Group", "天堂旅游集团"],
                image: ["ParadiseTravelGroup.jpg", "ParadiseTravelGroup.jpg"],
                author: ["Zhang Jiajia", "张嘉佳"],
            },
            {
                title: ["Let Me Stay With You", "让我留在你身边"],
                image: ["LetMeStayWithYou.jpg", "LetMeStayWithYou.jpg"],
                author: ["Zhang Jiajia", "张嘉佳"],
            },
            {
                title: ["Along the Journey of Your World", "从你的全世界路过"],
                image: [
                    "AlongTheJourneyOfYourWorld.jpeg",
                    "AlongTheJourneyOfYourWorld.jpeg",
                ],
                author: ["Zhang Jiajia", "张嘉佳"],
            },
            {
                title: ["Bean Sesame Tea", "豆香芝麻茶"],
                image: ["BeanSesameTea.jpeg", "BeanSesameTea.jpeg"],
                author: ["Yang Benfen", "杨本芬"],
            },
            {
                title: ["I Am Fragrant", "我本芬芳"],
                image: ["IAmFragrant.jpeg", "IAmFragrant.jpeg"],
                author: ["Yang Benfen", "杨本芬"],
            },
            {
                title: ["Driftwood", "浮木"],
                image: ["Driftwood.jpeg", "Driftwood.jpeg"],
                author: ["Yang Benfen", "杨本芬"],
            },
            {
                title: ["The Psychology of Money", "金钱心理学"],
                image: [
                    "ThePsychologyOfMoney.jpeg",
                    "ThePsychologyOfMoneyCN.jpg",
                ],
                author: ["Morgan Housel", "摩根·豪泽尔"],
            },
            {
                title: ["Collected Essays", "寻味东西"],
                image: ["CollectedEssays.jpg", "CollectedEssaysCN.jpeg"],
                author: ["Fuchsia Dunlop", "扶霞·邓洛普"],
            },
            {
                title: ["Twenty Years of Backpacking", "背包二十年"],
                image: [
                    "TwentyYearsOfBackpacking.jpeg",
                    "TwentyYearsOfBackpacking.jpeg",
                ],
                author: ["Xiao Peng", "小鹏"],
            },
            {
                title: ["Take Me Home", "只要不忘了回家的路"],
                image: ["TakeMeHome.jpeg", "TakeMeHome.jpeg"],
                author: ["Xiao Peng", "小鹏"],
            },
            {
                title: ["Why We Travel", "我们为什么旅行"],
                image: ["WhyWeTravel.jpeg", "WhyWeTravel.jpeg"],
                author: ["Xiao Peng", "小鹏"],
            },
            {
                title: ["Cries in the Drizzle", "在细雨中呼喊"],
                image: ["CriesInTheDrizzle.jpeg", "CriesInTheDrizzleCN.jpeg"],
                author: ["Yu Hua", "余华"],
            },
            {
                title: ["Crying in H Mart", "妈妈走后"],
                image: ["CryingInHMart.jpeg", "CryingInHMartCN.jpeg"],
                author: ["Michelle Zauner", "米歇尔·佐纳"],
            },
            {
                title: ["Brothers", "兄弟"],
                image: ["Brothers.jpeg", "BrothersCN.jpeg"],
                author: ["Yu Hua", "余华"],
            },
            {
                title: ["Building a Second Brain", "Building a Second Brain"],
                image: [
                    "BuildingASecondBrain.jpeg",
                    "BuildingASecondBrain.jpeg",
                ],
                author: ["Tiago Forte", "Tiago Forte"],
            },
            {
                title: ["Chronicle of a Blood Merchant", "许三观卖血记"],
                image: [
                    "ChronicleOfABloodMerchant.jpg",
                    "ChronicleOfABloodMerchantCN.jpeg",
                ],
                author: ["Yu Hua", "余华"],
            },
            {
                title: ["To Live", "活着"],
                image: ["ToLive.jpeg", "ToLiveCN.jpeg"],
                author: ["Yu Hua", "余华"],
            },
            {
                title: ["I Deliver Express in Beijing", "我在北京送快递"],
                image: [
                    "IDeliverExpressInBeijing.jpeg",
                    "IDeliverExpressInBeijing.jpeg",
                ],
                author: ["Hu Anyan", "胡安焉"],
            },
            {
                title: ["The Pragmatic Programmer", "程序员修炼之道"],
                image: [
                    "ThePragmaticProgrammer.jpeg",
                    "ThePragmaticProgrammer.jpeg",
                ],
                author: [
                    "David Thomas and Andrew Hunt",
                    "David Thomas and Andrew Hunt",
                ],
            },
        ],
    },
    {
        title: 2023,
        items: [
            {
                title: ["Strange Stones", "奇石"],
                image: ["StrangeStones.jpeg", "StrangeStonesCN.jpeg"],
                author: ["Peter Hessler", "何伟"],
            },
            {
                title: ["River Town", "江城"],
                image: ["RiverTown.jpeg", "RiverTownCN.jpeg"],
                author: ["Peter Hessler", "何伟"],
            },
            {
                title: ["Country Driving", "寻路中国"],
                image: ["CountryDriving.jpeg", "CountryDrivingCN.jpeg"],
                author: ["Peter Hessler", "何伟"],
            },
            {
                title: ["I Need to Survive", "我要活下去"],
                image: ["INeedToSurvive.jpeg", "INeedToSurvive.jpeg"],
                author: ["Kim Tak-Hwan", "金琸桓"],
            },
            {
                title: ["The Return of the King", "王者归来"],
                image: ["TheReturnOfTheKing.jpeg", "TheReturnOfTheKing.jpeg"],
                author: ["J. R. R. Tolkien", "J·R·R·托尔金"],
            },
            {
                title: ["The Two Towers", "双塔奇兵"],
                image: ["TheTwoTowers.jpeg", "TheTwoTowers.jpeg"],
                author: ["J. R. R. Tolkien", "J·R·R·托尔金"],
            },
            {
                title: ["The Fellowship of the Ring", "护戒使者"],
                image: [
                    "TheFellowshipOfTheRing.jpeg",
                    "TheFellowshipOfTheRing.jpeg",
                ],
                author: ["J. R. R. Tolkien", "J·R·R·托尔金"],
            },
            {
                title: ["The Hobbit", "霍比特人"],
                image: ["TheHobbit.jpeg", "TheHobbit.jpeg"],
                author: ["J. R. R. Tolkien", "J. R. R. Tolkien"],
            },
            {
                title: ["After My Wife Died", "妻子的后事"],
                image: ["AfterMyWifeDied.jpg", "AfterMyWifeDied.jpg"],
                author: ["坂井希久子", "坂井希久子"],
            },
            {
                title: ["No Hard Feelings", "我工作，我没有不开心"],
                image: ["NoHardFeelings.jpg", "NoHardFeelings.jpg"],
                author: [
                    "Liz Fosslien / Mollie West Duffy",
                    "Liz Fosslien / Mollie West Duffy",
                ],
            },
            {
                title: ["I Am Malala", "我是马拉拉"],
                image: ["IAmMalala.jpeg", "IAmMalala.jpeg"],
                author: ["Malala Yousafzai", "马拉拉·优素福·扎伊"],
            },
            {
                title: [
                    "The Coding Career Handbook",
                    "The Coding Career Handbook",
                ],
                image: [
                    "TheCodingCareerHandbook.jpeg",
                    "TheCodingCareerHandbook.jpeg",
                ],
                author: ["Shawn Swyx Wang", "Shawn Swyx Wang"],
            },
            {
                title: ["Alan Wake", "心灵杀手"],
                image: ["AlanWake.jpg", "AlanWake.jpg"],
                author: ["Rick Burroughs", "Rick Burroughs"],
            },
            {
                title: ["Qiu Yuan", "秋园"],
                image: ["QiuYuan.jpg", "QiuYuan.jpg"],
                author: ["Yang Benfen", "杨本芬"],
            },
            {
                title: ["The Litchi Road", "长安的荔枝"],
                image: ["TheLitchiRoad.jpeg", "TheLitchiRoad.jpeg"],
                author: ["Ma Boyong", "马伯庸"],
            },
            {
                title: ["Artemis", "月球城市"],
                image: ["Artemis.jpeg", "Artemis.jpeg"],
                author: ["Andy Weir", "安迪·威尔"],
            },
            {
                title: ["The Compound Effect", "复利效应"],
                image: ["TheCompoundEffect.jpg", "TheCompoundEffect.jpg"],
                author: ["Darren Hardy", "Darren Hardy"],
            },
            {
                title: ["Project Hail Mary", "挽救计划"],
                image: ["ProjectHailMary.jpeg", "ProjectHailMaryCN.jpeg"],
                author: ["Andy Weir", "安迪·威尔"],
            },
        ],
    },
    {
        title: 2022,
        items: [
            {
                title: ["Sea Anemone", "海葵"],
                image: ["SeaAnemone.jpg", "SeaAnemone.jpg"],
                author: ["Bei Ke Bang", "贝客邦"],
            },
            {
                title: ["We Were Dreamers", "我们都是追梦者"],
                image: ["WeWereDreamers.jpg", "WeWereDreamers.jpg"],
                author: ["Simu Liu", "刘思慕"],
            },
            {
                title: ["Rich Dad Poor Dad", "富爸爸·穷爸爸"],
                image: ["RichDadPoorDad.jpg", "RichDadPoorDad.jpg"],
                author: ["Robert T. Kiyosaki", "罗伯特·清崎"],
            },
            {
                title: ["Atomic Habits", "Atomic Habits"],
                image: ["AtomicHabits.jpeg", "AtomicHabits.jpeg"],
                author: ["James Clear", "James Clear"],
            },
            {
                title: ["Selfish, Shallow, and Self-Absorbed", "最好的决定"],
                image: [
                    "SelfishShallowAndSelfAbsorbed.jpeg",
                    "SelfishShallowAndSelfAbsorbedCN.jpeg",
                ],
                author: ["Meghan Daum", "梅根·多姆"],
            },
            {
                title: ["Why We Sleep", "我们为什么要睡觉？"],
                image: ["WhyWeSleep.jpeg", "WhyWeSleep.jpeg"],
                author: ["Matthew Walker", "马修·沃克"],
            },
            {
                title: ["Being Mortal", "最好的告别"],
                image: ["BeingMortal.jpeg", "BeingMortalCN.jpeg"],
                author: ["Atul Gawande", "阿图·葛文德"],
            },
            {
                title: ["Midnight in Chernobyl", "切尔诺贝利的午夜"],
                image: [
                    "MidnightInChernobyl.jpeg",
                    "MidnightInChernobylCN.jpg",
                ],
                author: ["Adam Higginbotham", "亚当·希金博特姆"],
            },
            {
                title: ["Murder on the Orient Express", "东方快车谋杀案"],
                image: [
                    "MurderOnTheOrientExpress.jpg",
                    "MurderOnTheOrientExpressCN.jpg",
                ],
                author: ["Agatha Christie", "阿加莎·克里斯蒂"],
            },
            {
                title: ["And Then There Were None", "无人生还"],
                image: ["AndThenThereWereNone.jpg", "AndThenThereWereNone.jpg"],
                author: ["Agatha Christie", "阿加莎·克里斯蒂"],
            },
            {
                title: ["Klara and the Sun", "克拉拉与太阳"],
                image: ["KlaraAndTheSun.jpg", "KlaraAndTheSun.jpg"],
                author: ["Kazuo Ishiguro", "石黑一雄"],
            },
            {
                title: ["The Crimes That Bind", "祈祷落幕时"],
                image: ["TheCrimesThatBind.jpeg", "TheCrimesThatBind.jpeg"],
                author: ["Keigo Higashino", "东野奎吾"],
            },
            {
                title: ["The Storied Life of A. J. Fikry", "岛上书店"],
                image: [
                    "TheStoriedLifeOfAJFikry.jpg",
                    "TheStoriedLifeOfAJFikry.jpg",
                ],
                author: ["Gabrielle Zevin", "嘉布莉·丽文"],
            },
            {
                title: ["Steve Jobs", "史蒂夫·乔布斯传"],
                image: ["SteveJobs.jpg", "SteveJobs.jpg"],
                author: ["Walter Isaacson", "沃尔特·艾萨克森"],
            },
            {
                title: ["Bad Blood", "恶血"],
                image: ["BadBlood.jpg", "BadBlood.jpg"],
                author: ["John Carreyrou", "约翰·卡里鲁"],
            },
            {
                title: ["A Man Called Ove", "一个叫欧维的男人"],
                image: ["AManCalledOve.jpg", "AManCalledOveCN.jpg"],
                author: ["Fredrik Backman", "弗雷德里克·巴克曼"],
            },
        ],
    },
    {
        title: 2021,
        items: [
            {
                title: ["Anxious People", "焦虑的人"],
                image: ["AnxiousPeople.jpg", "AnxiousPeopleCN.jpg"],
                author: ["Fredrik Backman", "弗雷德里克·巴克曼"],
            },
            {
                title: ["The Forgotten Village", "六里庄遗事"],
                image: ["TheForgottenVillage.jpg", "TheForgottenVillage.jpg"],
                author: ["Dong Dong Qiang", "东东枪"],
            },
            {
                title: ["The Midnight Library", "午夜图书馆"],
                image: ["TheMidnightLibrary.jpg", "TheMidnightLibraryCN.jpg"],
                author: ["Matt Haig", "麦特·海格"],
            },
            {
                title: ["The Handmaid's Tale", "使女的故事"],
                image: ["TheHandmaidsTale.jpg", "TheHandmaidsTaleCN.jpg"],
                author: ["Margaret Atwood", "玛格丽特·阿特伍德"],
            },
            {
                title: ["Ordered", "受命"],
                image: ["Ordered.jpg", "Ordered.jpg"],
                author: ["Zhi An", "止庵"],
            },
            {
                title: ["Grocery Store", "南货店"],
                image: ["GroceryStore.jpg", "GroceryStore.jpg"],
                author: ["Zhang Ji", "张忌"],
            },
            {
                title: ["Paper Towns", "纸镇"],
                image: ["PaperTowns.jpg", "PaperTownsCN.jpg"],
                author: ["John Green", "约翰·格林"],
            },
            {
                title: ["Fly Already", "银河系边缘的小失常"],
                image: ["FlyAlready.jpg", "FlyAlreadyCN.jpg"],
                author: ["Etgar Keret", "埃特加·凯雷特"],
            },
            {
                title: [
                    "Horizon, Bright Moon, Saber",
                    "小李飞刀4：天涯·明月·刀",
                ],
                image: [
                    "HorizonBrightMoonSaber.jpg",
                    "HorizonBrightMoonSaber.jpg",
                ],
                author: ["Gu Long", "古龙"],
            },
            {
                title: ["Know My Name", "知晓我姓名"],
                image: ["KnowMyName.jpg", "KnowMyNameCN.jpg"],
                author: ["Chanel Miller", "香奈儿·米勒"],
            },
            {
                title: ["Moonflower Murders", "Moonflower Murders"],
                image: ["MoonflowerMurders.jpg", "MoonflowerMurders.jpg"],
                author: ["Anthony Horowitz", "安东尼·霍洛维茨"],
            },
            {
                title: ["Magpie Murders", "喜鹊谋杀案"],
                image: ["MagpieMurders.jpg", "MagpieMurders.jpg"],
                author: ["Anthony Horowitz", "安东尼·霍洛维茨"],
            },
        ],
    },
    {
        title: 2020,
        items: [
            {
                title: [
                    "Fang Si-Chi's First Love Paradise",
                    "房思琪的初恋乐园",
                ],
                image: [
                    "FangSichisFirstLoveParadise.jpg",
                    "FangSichisFirstLoveParadise.jpg",
                ],
                author: ["Lin Yi-han", "林奕含"],
            },
            {
                title: ["Lockdown", "封锁"],
                image: ["Lockdown.jpg", "Lockdown.jpg"],
                author: ["Peter May", "彼得·梅"],
            },
            {
                title: [
                    "Eagle Soaring in the Ninth Month",
                    "小李飞刀3：九月鹰飞",
                ],
                image: [
                    "EagleSoaringInTheNinthMonth.jpg",
                    "EagleSoaringInTheNinthMonth.jpg",
                ],
                author: ["Gu Long", "古龙"],
            },
            {
                title: ["Shut Up and Listen!", "Shut Up and Listen!"],
                image: ["ShutUpAndListen.jpg", "ShutUpAndListen.jpg"],
                author: ["Tilman Fertitta", "Tilman Fertitta"],
            },
            {
                title: ["Bordertown Wanderer", "小李飞刀2：边城浪子"],
                image: ["BordertownWanderer.jpg", "BordertownWanderer.jpg"],
                author: ["Gu Long", "古龙"],
            },
            {
                title: [
                    "Sentimental Swordsman, Ruthless Sword",
                    "小李飞刀1：多情剑客无情剑",
                ],
                image: [
                    "SentimentalSwordsmanRuthlessSword.jpg",
                    "SentimentalSwordsmanRuthlessSword.jpg",
                ],
                author: ["Gu Long", "古龙"],
            },
            {
                title: ["Mastery", "Mastery"],
                image: ["Mastery.jpg", "Mastery.jpg"],
                author: ["George Leonard", "George Leonard"],
            },
            {
                title: ["Ender's Game", "安德的游戏"],
                image: ["EndersGame.jpg", "EndersGame.jpg"],
                author: ["Orson Scott Card", "奥森·斯科特·卡德"],
            },
            {
                title: ["Shark's Fin and Sichuan Pepper", "鱼翅与花椒"],
                image: [
                    "SharksFinAndSichuanPepper.jpg",
                    "SharksFinAndSichuanPepper.jpg",
                ],
                author: ["Fuchsia Dunlop", "扶霞·邓洛普"],
            },
            {
                title: ["Like Father, Like Son", "如父如子"],
                image: ["LikeFatherLikeSon.jpg", "LikeFatherLikeSon.jpg"],
                author: ["Hirokazu Koreeda", "是枝裕和"],
            },
            {
                title: ["Kim Ji-young, Born 1982", "82年生的金智英"],
                image: ["KimJiyoungBorn1982.jpg", "KimJiyoungBorn1982.jpg"],
                author: ["Cho Nam-Joo", "Cho Nam-Joo"],
            },
            {
                title: ["The Martian", "火星救援"],
                image: ["TheMartian.jpg", "TheMartian.jpg"],
                author: ["Andy Weir", "安迪·威尔"],
            },
            {
                title: ["The Last Monkey Performer", "最后的耍猴人"],
                image: [
                    "TheLastMonkeyPerformer.jpg",
                    "TheLastMonkeyPerformer.jpg",
                ],
                author: ["马宏杰", "马宏杰"],
            },
            {
                title: ["Klein Bottle", "克莱因壶"],
                image: ["KleinBottle.jpg", "KleinBottle.jpg"],
                author: ["冈岛二人", "冈岛二人"],
            },
            {
                title: ["Bad Kid", "坏小孩"],
                image: ["BadKid.jpg", "BadKid.jpg"],
                author: ["紫金陈", "紫金陈"],
            },
            {
                title: ["The Devil Wears Prada", "穿普拉达的女王"],
                image: ["TheDevilWearsPrada.jpg", "TheDevilWearsPrada.jpg"],
                author: ["Lauren Weisberger", "萝伦·薇丝柏格"],
            },
            {
                title: [
                    "Delivered from Distraction",
                    "Delivered from Distraction",
                ],
                image: [
                    "DeliveredFromDistraction.jpg",
                    "DeliveredFromDistraction.jpg",
                ],
                author: [
                    "Edward M. Hallowell and John J. Ratey",
                    "Edward M. Hallowell and John J. Ratey",
                ],
            },
            {
                title: ["Educated", "Educated"],
                image: ["Educated.jpg", "Educated.jpg"],
                author: ["Tara Westover", "Tara Westover"],
            },
        ],
    },
    {
        title: 2019,
        items: [
            {
                title: ["Driven to Distraction", "Driven to Distraction"],
                image: ["DrivenToDistraction.jpg", "DrivenToDistraction.jpg"],
                author: [
                    "Edward M. Hallowell and John J. Ratey",
                    "Edward M. Hallowell and John J. Ratey",
                ],
            },
            {
                title: ["The Longest Day In Chang'an", "长安十二时辰"],
                image: [
                    "TheLongestDayInChangan.jpg",
                    "TheLongestDayInChangan.jpg",
                ],
                author: ["Ma Boyong", "马伯庸"],
            },
            {
                title: ["The Phoenix Project", "凤凰项目"],
                image: ["ThePhoenixProject.jpg", "ThePhoenixProject.jpg"],
                author: [
                    "Gene Kim, Kevin Behr, and George Spafford",
                    "Gene Kim, Kevin Behr, and George Spafford",
                ],
            },
            {
                title: [
                    "The Girl with Seven Names",
                    "The Girl with Seven Names",
                ],
                image: [
                    "TheGirlWithSevenNames.jpg",
                    "TheGirlWithSevenNames.jpg",
                ],
                author: ["Hyeonseo Lee", "Hyeonseo Lee"],
            },
            {
                title: ["Ready Player One", "头号玩家"],
                image: ["ReadyPlayerOne.jpg", "ReadyPlayerOne.jpg"],
                author: ["Ernest Cline", "恩斯特·克莱恩"],
            },
            {
                title: ["Sleep", "Sleep"],
                image: ["Sleep.jpg", "Sleep.jpg"],
                author: ["Nick Littlehales", "Nick Littlehales"],
            },
            {
                title: ["The Three-Body Problem", "三体"],
                image: ["TheThreebodyProblem.jpg", "TheThreebodyProblem.jpg"],
                author: ["刘慈欣", "刘慈欣"],
            },
            {
                title: ["How to Stop Worrying and Start Living", "人性的优点"],
                image: [
                    "HowToStopWorryingAndStartLiving.jpg",
                    "HowToStopWorryingAndStartLiving.jpg",
                ],
                author: ["Dale Carnegie", "戴尔·卡耐基"],
            },
            {
                title: [
                    "Reaching the Southern Hemisphere, Everything Changed",
                    "到了南半球，一切都变了",
                ],
                image: [
                    "ReachingTheSouthernHemisphereEverythingChanged.jpg",
                    "ReachingTheSouthernHemisphereEverythingChanged.jpg",
                ],
                author: ["刘小顺", "刘小顺"],
            },
            {
                title: [
                    "How to Win Friends and Influence People",
                    "人性的弱点",
                ],
                image: [
                    "HowToWinFriendsAndInfluencePeople.jpg",
                    "HowToWinFriendsAndInfluencePeople.jpg",
                ],
                author: ["Dale Carnegie", "戴尔·卡耐基"],
            },
            {
                title: ["The Wandering Earth", "流浪地球"],
                image: ["TheWanderingEarth.jpg", "TheWanderingEarth.jpg"],
                author: ["刘慈欣", "刘慈欣"],
            },
            {
                title: [
                    "Watch Dogs The DedSec Revenge",
                    "Watch Dogs The DedSec Revenge",
                ],
                image: [
                    "WatchDogsTheDedsecRevenge.jpg",
                    "WatchDogsTheDedsecRevenge.jpg",
                ],
                author: ["Innovate Media", "Innovate Media"],
            },
        ],
    },
    {
        title: 2018,
        items: [
            {
                title: ["Allegiant", "忠诚者"],
                image: ["Allegiant.jpg", "Allegiant.jpg"],
                author: ["Veronica Roth", "Veronica Roth"],
            },
            {
                title: ["Insurgent", "反叛者"],
                image: ["Insurgent.jpg", "Insurgent.jpg"],
                author: ["Veronica Roth", "Veronica Roth"],
            },
        ],
    },
    {
        title: 2017,
        items: [
            {
                title: [
                    "Daily Life in the Roman City",
                    "Daily Life in the Roman City",
                ],
                image: [
                    "DailyLifeInTheRomanCity.jpg",
                    "DailyLifeInTheRomanCity.jpg",
                ],
                author: ["Gregory S. Aldrete", "Gregory S. Aldrete"],
            },
            {
                title: ["Divergent", "分歧者"],
                image: ["Divergent.jpg", "Divergent.jpg"],
                author: ["Veronica Roth", "Veronica Roth"],
            },
            {
                title: ["The Fever Code", "The Fever Code"],
                image: ["TheFeverCode.jpg", "TheFeverCode.jpg"],
                author: ["James Dashner", "James Dashner"],
            },
            {
                title: [
                    "The Complete Software Developer's Career Guide",
                    "The Complete Software Developer's Career Guide",
                ],
                image: [
                    "TheCompleteSoftwareDevelopersCareerGuide.jpeg",
                    "TheCompleteSoftwareDevelopersCareerGuide.jpeg",
                ],
                author: ["John Sonmez", "John Sonmez"],
            },
            {
                title: ["The Kill Order", "The Kill Order"],
                image: ["TheKillOrder.jpg", "TheKillOrder.jpg"],
                author: ["James Dashner", "James Dashner"],
            },
            {
                title: ["The Death Cure", "The Death Cure"],
                image: ["TheDeathCure.jpg", "TheDeathCure.jpg"],
                author: ["James Dashner", "James Dashner"],
            },
            {
                title: ["The Scorch Trials", "The Scorch Trials"],
                image: ["TheScorchTrials.jpg", "TheScorchTrials.jpg"],
                author: ["James Dashner", "James Dashner"],
            },
            {
                title: ["The Maze Runner", "The Maze Runner"],
                image: ["TheMazeRunner.jpg", "TheMazeRunner.jpg"],
                author: ["James Dashner", "James Dashner"],
            },
            {
                title: [
                    "Harry Potter and the Deathly Hallows",
                    "哈利·波特与死亡圣器",
                ],
                image: [
                    "HarryPotterAndTheDeathlyHallows.jpg",
                    "HarryPotterAndTheDeathlyHallows.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
        ],
    },
    {
        title: 2016,
        items: [
            {
                title: [
                    "Harry Potter and the Half-Blood Prince",
                    "哈利·波特与“混血王子”",
                ],
                image: [
                    "HarryPotterAndTheHalfbloodPrince.jpg",
                    "HarryPotterAndTheHalfbloodPrince.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
            {
                title: [
                    "Harry Potter and the Order of the Phoenix",
                    "哈利·波特与凤凰社",
                ],
                image: [
                    "HarryPotterAndTheOrderOfThePhoenix.jpg",
                    "HarryPotterAndTheOrderOfThePhoenix.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
            {
                title: [
                    "Quantum Break: Zero State",
                    "Quantum Break: Zero State",
                ],
                image: [
                    "QuantumBreakZeroState.jpg",
                    "QuantumBreakZeroState.jpg",
                ],
                author: ["Cam Rogers", "Cam Rogers"],
            },
            {
                title: [
                    "Harry Potter and the Goblet of Fire",
                    "哈利·波特与火焰杯",
                ],
                image: [
                    "HarryPotterAndTheGobletOfFire.jpg",
                    "HarryPotterAndTheGobletOfFire.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
            {
                title: [
                    "Harry Potter and the Prisoner of Azkaban",
                    "哈利·波特与阿兹卡班囚徒",
                ],
                image: [
                    "HarryPotterAndThePrisonerOfAzkaban.jpg",
                    "HarryPotterAndThePrisonerOfAzkaban.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
            {
                title: [
                    "Harry Potter and the Chamber of Secrets",
                    "哈利·波特与密室",
                ],
                image: [
                    "HarryPotterAndTheChamberOfSecrets.jpg",
                    "HarryPotterAndTheChamberOfSecrets.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
            {
                title: [
                    "Harry Potter and the Sorcerer's Stone",
                    "哈利·波特与魔法石",
                ],
                image: [
                    "HarryPotterAndTheSorcerersStone.jpg",
                    "HarryPotterAndTheSorcerersStone.jpg",
                ],
                author: ["J.K. Rowling", "J·K·罗琳"],
            },
            {
                title: ["Third Culture Kids", "Third Culture Kids"],
                image: ["ThirdCultureKids.jpg", "ThirdCultureKids.jpg"],
                author: [
                    "David C. Pollock and Ruth E. van Reken",
                    "David C. Pollock and Ruth E. van Reken",
                ],
            },
            {
                title: ["My Two Moms", "My Two Moms"],
                image: ["MyTwoMoms.jpg", "MyTwoMoms.jpg"],
                author: ["Zach Wahls", "Zach Wahls"],
            },
            {
                title: [
                    "A Sociology of Family Life",
                    "A Sociology of Family Life",
                ],
                image: [
                    "ASociologyOfFamilyLife.jpg",
                    "ASociologyOfFamilyLife.jpg",
                ],
                author: ["Deborah Chambers", "Deborah Chambers"],
            },
            {
                title: ["How We Learn", "How We Learn"],
                image: ["HowWeLearn.jpg", "HowWeLearn.jpg"],
                author: ["Benedict Carey", "Benedict Carey"],
            },
        ],
    },
    {
        title: 2015,
        items: [
            {
                title: ["Having Our Say", "Having Our Say"],
                image: ["HavingOurSay.jpg", "HavingOurSay.jpg"],
                author: [
                    "Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth",
                    "Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth",
                ],
            },
            {
                title: ["Miracles of the Namiya General Store", "解忧杂货店"],
                image: [
                    "MiraclesOfTheNamiyaGeneralStore.jpg",
                    "MiraclesOfTheNamiyaGeneralStore.jpg",
                ],
                author: ["Keigo Higashino", "Keigo Higashino"],
            },
        ],
    },
    {
        title: 2014,
        items: [
            {
                title: ["The Longest Way", "徒步中国"],
                image: ["TheLongestWay.jpg", "TheLongestWayCN.jpg"],
                author: ["Christoph Rehage", "雷克"],
            },
        ],
    },
    {
        title: 2013,
        items: [
            {
                title: ["The Minority Report", "少数派报告"],
                image: ["TheMinorityReport.jpeg", "TheMinorityReportCN.jpeg"],
                author: ["Philip K. Dick", "菲利普·狄克"],
            },
            {
                title: ["Ten Years of Backpacking", "背包十年"],
                image: [
                    "TenYearsOfBackpacking.jpeg",
                    "TenYearsOfBackpacking.jpeg",
                ],
                author: ["Xiao Peng", "小鹏"],
            },
            {
                title: ["Insight", "看见"],
                image: ["Insight.jpeg", "Insight.jpeg"],
                author: ["Chai Jing", "柴静"],
            },
            {
                title: ["Mockingjay", "饥饿游戏3：嘲笑鸟"],
                image: ["Mockingjay.jpg", "Mockingjay.jpg"],
                author: ["Suzanne Collins", "苏珊·柯林斯"],
            },
            {
                title: ["Catching Fire", "饥饿游戏2：燃烧的女孩"],
                image: ["CatchingFire.jpeg", "CatchingFire.jpeg"],
                author: ["Suzanne Collins", "苏珊·柯林斯"],
            },
            {
                title: ["The Hunger Games", "饥饿游戏"],
                image: ["TheHungerGames.jpeg", "TheHungerGames.jpeg"],
                author: ["Suzanne Collins", "苏珊·柯林斯"],
            },
            {
                title: ["Wolves", "狼群"],
                image: ["Wolves.jpg", "Wolves.jpg"],
                author: ["Ci Xue", "刺血"],
            },
        ],
    },
    {
        title: 2008,
        items: [
            {
                title: ["Jade Dynasty 7", "诛仙7"],
                image: ["JadeDynasty7.jpg", "JadeDynasty7.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
            {
                title: ["Jade Dynasty 6", "诛仙6"],
                image: ["JadeDynasty6.jpg", "JadeDynasty6.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
            {
                title: ["Jade Dynasty 5", "诛仙5"],
                image: ["JadeDynasty5.jpg", "JadeDynasty5.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
            {
                title: ["Jade Dynasty 4", "诛仙4"],
                image: ["JadeDynasty4.jpg", "JadeDynasty4.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
            {
                title: ["Jade Dynasty 3", "诛仙3"],
                image: ["JadeDynasty3.jpg", "JadeDynasty3.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
            {
                title: ["Jade Dynasty 2", "诛仙2"],
                image: ["JadeDynasty2.jpg", "JadeDynasty2.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
            {
                title: ["Jade Dynasty 1", "诛仙1"],
                image: ["JadeDynasty1.jpg", "JadeDynasty1.jpg"],
                author: ["Xiao Ding", "萧鼎"],
            },
        ],
    },
];

export default books;
