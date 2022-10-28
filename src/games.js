const games = [
    {
        'title': 2022,
        'items': [
            {
                'title': [
                    "A Plague Tale: Innocence", "瘟疫传说：无罪"
                ],
                'image': ['APlagueTaleInnocence.jpeg', 'APlagueTaleInnocence.jpeg'],
                'author': ['Asobo Studio', 'Asobo 游戏工作室'],
                'dlc': []
            },
            {
                'title': [
                    "Alan Wake", "心灵杀手"
                ],
                'image': ['AlanWake.jpeg', 'AlanWake.jpeg'],
                'author': ['Remedy Entertainment', '绿美迪娱乐'],
                'dlc': [["The Signal", "信号"], ["The Writer", "作家"]]
            },
            {
                'title': [
                    "Stray",
                    "Stray"
                ],
                'image': ['Stray.jpeg', 'Stray.jpeg'],
                'author': ['BlueTwelve Studio', 'BlueTwelve Studio'],
                'dlc': []
            },
            {
                'title': [
                    "God of War",
                    "战神"
                ],
                'image': ['GodOfWar.jpeg', 'GodOfWar.jpeg'],
                'author': ['SIE Santa Monica Studio', '索尼互动娱乐圣莫尼卡工作室'],
                'dlc': []
            },
            {
                'title': [
                    "Assassin's Creed II",
                    "刺客信条II"
                ],
                'image': ['AssassinsCreed2.jpeg', 'AssassinsCreed2.jpeg'],
                'author': ['Ubisoft', '育碧'],
                'dlc': []
            },
            {
                'title': [
                    "Assassin's Creed",
                    "刺客信条"
                ],
                'image': ['AssassinsCreed1.jpeg', 'AssassinsCreed1.jpeg'],
                'author': ['Ubisoft', '育碧'],
                'dlc': []
            },
            {
                'title': [
                    "The Last of Us Part II",
                    "最后生还者 第II章"
                ],
                'image': ['TheLastOfUsPart2.webp', 'TheLastOfUsPart2.webp'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "The Last of Us",
                    "最后生还者"
                ],
                'image': ['TheLastOfUs.jpeg', 'TheLastOfUs.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': [['Left Behind', '抛诸脑后']]
            },
            {
                'title': [
                    "Uncharted 3: Drake's Deception",
                    "神秘海域3：德雷克的诡计"
                ],
                'image': ['UnchartedDrakesDeception.jpeg', 'UnchartedDrakesDeception.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "Uncharted 2: Among Thieves",
                    "神秘海域2：纵横四海"
                ],
                'image': ['UnchartedAmongThieves.jpeg', 'UnchartedAmongThieves.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "Uncharted: Drake's Fortune",
                    "神秘海域：德雷克船长的宝藏"
                ],
                'image': ['UnchartedDrakesFortune.webp', 'UnchartedDrakesFortune.webp'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "Mafia",
                    "四海兄弟"
                ],
                'image': ['Mafia.jpeg', 'Mafia.jpeg'],
                'author': ['Hangar 13', 'Hangar 13'],
                'dlc': []
            }
        ]
    },
    {
        'title': 2021,
        'items': [
            {
                'title': [
                    "Marvel's Guardians of the Galaxy",
                    "漫威银河护卫队"
                ],
                'image': ['GuardiansOfTheGalaxy.jpeg', 'GuardiansOfTheGalaxy.jpeg'],
                'author': ['Eidos-Montréal', '艺夺蒙特利尔'],
                'dlc': []
            },
            {
                'title': [
                    "Life Is Strange: True Colors",
                    "奇异人生：本色"
                ],
                'image': ['LifeIsStrangeTrueColors.jpeg', 'LifeIsStrangeTrueColors.jpeg'],
                'author': ['Deck Nine', 'Deck Nine'],
                'dlc': [['Wavelengths', '波长']]
            },
            {
                'title': [
                    "Star Wars Jedi: Fallen Order",
                    "星球大战 绝地：陨落的武士团"
                ],
                'image': ['StarWarsJediFallenOrder.jpeg', 'StarWarsJediFallenOrder.jpeg'],
                'author': ['Electronic Arts', '艺电'],
                'dlc': []
            },
            {
                'title': [
                    "Detroit: Become Human",
                    "底特律：化身为人"
                ],
                'image': ['DetroitBecomeHuman.jpeg', 'DetroitBecomeHuman.jpeg'],
                'author': ['Quantic Dream', 'Quantic Dream'],
                'dlc': []
            },
            {
                'title': [
                    "Marvel's Spider-Man: Miles Morales",
                    "漫威蜘蛛侠：迈尔斯·莫拉雷斯"
                ],
                'image': ['SpiderManMilesMorales.webp', 'SpiderManMilesMorales.webp'],
                'author': ['Insomniac Games', 'Insomniac Games'],
                'dlc': []
            },
            {
                'title': ["Marvel's Avengers", "漫威复仇者"],
                'image': ['Avengers.jpeg', 'Avengers.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': [["Kate Bishop - Taking AIM", "凯特·毕肖普之击败先锋科技"], 
                        ["Hawkeye - Future Imperfect", "鹰眼之不完美的未来"]]
            },
            {
                'title': ["Shadow of the Tomb Raider", "古墓丽影：暗影"],
                'image': ['ShadowOfTheTombRaider.jpeg', 'ShadowOfTheTombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': []
            },
            {
                'title': [
                    "Marvel's Spider-Man",
                    "漫威蜘蛛侠"
                ],
                'image': ['SpiderMan.webp', 'SpiderMan.webp'],
                'author': ['Insomniac Games', 'Insomniac Games'],
                'dlc': [['The City That Never Sleeps', '不夜城']]
            },
            {
                'title': [
                    'Cyberpunk 2077',
                    '赛博朋克 2077'
                ],
                'image': ['Cyberpunk2077.jpeg', 'Cyberpunk2077.jpeg'],
                'author': ['CD Projekt', 'CD Projekt'],
                'dlc': []
            }]
    },
    {
        'title': 2020,
        'items': [
            {
                'title': [
                    'Watch Dogs: Legion',
                    '看门狗：军团'
                ],
                'image': ['WatchDogsLegion.webp', 'WatchDogsLegion.webp'],
                'author': ['Ubisoft', '育碧'],
                'dlc': [['Bloodline', '血脉相承']]
            },
            {
                'title': ['Watch Dogs 2', '看门狗2'],
                'image': ['WatchDogs2.jpeg', 'WatchDogs2.jpeg'],
                'author': ['Ubisoft', '育碧'],
                'dlc': []
            },
            {
                'title': ['The Invisible Guardian', '隐形守护者'],
                'image': ['TheInvisibleGuardian.jpeg', 'TheInvisibleGuardian.jpeg'],
                'author': ['New One Studio', 'New One Studio'],
                'dlc': []
            },
            {
                'title': ['Rise of the Tomb Raider', '古墓丽影：崛起'],
                'image': ['RiseOfTheTombRaider.jpeg', 'RiseOfTheTombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': [['Baba Yaga', '巴巴雅加']]
            },
            {
                'title': ['Uncharted: The Lost Legacy', '神秘海域：失落的遗产'],
                'image': ['UnchartedTheLostLegacy.jpeg', 'UnchartedTheLostLegacy.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': ['Uncharted 4: A Thief’s End', '神秘海域4：盗贼末路'],
                'image': ['Uncharted4.jpeg', 'Uncharted4.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': ['Watch Dogs', '看门狗'],
                'image': ['WatchDogs.jpeg', 'WatchDogs.jpeg'],
                'author': ['Ubisoft', '育碧'],
                'dlc': [['Bad Blood', '坏血']]
            },
            {
                'title': ['Tomb Raider', '古墓丽影'],
                'image': ['TombRaider.jpeg', 'TombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': []
            }]
    },
    {
        'title': 2016,
        'items': [
            {
                'title': ['Shadow Complex', '多重阴影'],
                'image': ['ShadowComplex.jpeg', 'ShadowComplex.jpeg'],
                'author': ['Chair Entertainment', 'Chair Entertainment'],
                'dlc': []
            },
            {
                'title': ['Quantum Break', '量子裂痕'],
                'image': ['QuantumBreak.jpeg', 'QuantumBreak.jpeg'],
                'author': ['Remedy Entertainment', '绿美迪娱乐'],
                'dlc': []
            },
            {
                'title': ['Firewatch', '看火人'],
                'image': ['Firewatch.jpeg', 'Firewatch.jpeg'],
                'author': ['Campo Santo', 'Campo Santo'],
                'dlc': []
            }]
    }]

export default games;