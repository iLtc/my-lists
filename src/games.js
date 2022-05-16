const games = [
    {
        'title': 2022,
        'items': [
            {
                'title': [
                    "Uncharted 3: Drake's Deception",
                    "神秘海域3：德雷克的诡计"
                ],
                'image': ['images/UnchartedDrakesDeception.jpeg', 'images/UnchartedDrakesDeception.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "Uncharted 2: Among Thieves",
                    "神秘海域2：纵横四海"
                ],
                'image': ['images/UnchartedAmongThieves.jpeg', 'images/UnchartedAmongThieves.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "Uncharted: Drake's Fortune",
                    "神秘海域：德雷克船长的宝藏"
                ],
                'image': ['images/UnchartedDrakesFortune.webp', 'images/UnchartedDrakesFortune.webp'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': [
                    "Mafia",
                    "四海兄弟"
                ],
                'image': ['images/Mafia.jpeg', 'images/Mafia.jpeg'],
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
                'image': ['images/GuardiansOfTheGalaxy.jpeg', 'images/GuardiansOfTheGalaxy.jpeg'],
                'author': ['Eidos-Montréal', '艺夺蒙特利尔'],
                'dlc': []
            },
            {
                'title': [
                    "Life Is Strange: True Colors",
                    "奇异人生：本色"
                ],
                'image': ['images/LifeIsStrangeTrueColors.jpeg', 'images/LifeIsStrangeTrueColors.jpeg'],
                'author': ['Deck Nine', 'Deck Nine'],
                'dlc': [['Wavelengths', '波长']]
            },
            {
                'title': [
                    "Star Wars Jedi: Fallen Order",
                    "星球大战 绝地：陨落的武士团"
                ],
                'image': ['images/StarWarsJediFallenOrder.jpeg', 'images/StarWarsJediFallenOrder.jpeg'],
                'author': ['Electronic Arts', '艺电'],
                'dlc': []
            },
            {
                'title': [
                    "Detroit: Become Human",
                    "底特律：化身为人"
                ],
                'image': ['images/DetroitBecomeHuman.jpeg', 'images/DetroitBecomeHuman.jpeg'],
                'author': ['Quantic Dream', 'Quantic Dream'],
                'dlc': []
            },
            {
                'title': [
                    "Marvel's Spider-Man: Miles Morales",
                    "漫威蜘蛛侠：迈尔斯·莫拉雷斯"
                ],
                'image': ['images/SpiderManMilesMorales.webp', 'images/SpiderManMilesMorales.webp'],
                'author': ['Insomniac Games', 'Insomniac Games'],
                'dlc': []
            },
            {
                'title': ["Marvel's Avengers", "漫威复仇者"],
                'image': ['images/Avengers.jpeg', 'images/Avengers.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': [["Kate Bishop - Taking AIM", "凯特·毕肖普之击败先锋科技"], 
                        ["Hawkeye - Future Imperfect", "鹰眼之不完美的未来"]]
            },
            {
                'title': ["Shadow of the Tomb Raider", "古墓丽影：暗影"],
                'image': ['images/ShadowOfTheTombRaider.jpeg', 'images/ShadowOfTheTombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': []
            },
            {
                'title': [
                    "Marvel's Spider-Man",
                    "漫威蜘蛛侠"
                ],
                'image': ['images/SpiderMan.webp', 'images/SpiderMan.webp'],
                'author': ['Insomniac Games', 'Insomniac Games'],
                'dlc': [['The City That Never Sleeps', '不夜城']]
            },
            {
                'title': [
                    'Cyberpunk 2077',
                    '赛博朋克 2077'
                ],
                'image': ['images/Cyberpunk2077.jpeg', 'images/Cyberpunk2077.jpeg'],
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
                'image': ['images/WatchDogsLegion.webp', 'images/WatchDogsLegion.webp'],
                'author': ['Ubisoft', '育碧'],
                'dlc': [['Bloodline', '血脉相承']]
            },
            {
                'title': ['Watch Dogs 2', '看门狗2'],
                'image': ['images/WatchDogs2.jpeg', 'images/WatchDogs2.jpeg'],
                'author': ['Ubisoft', '育碧'],
                'dlc': []
            },
            {
                'title': ['The Invisible Guardian', '隐形守护者'],
                'image': ['images/TheInvisibleGuardian.jpeg', 'images/TheInvisibleGuardian.jpeg'],
                'author': ['New One Studio', 'New One Studio'],
                'dlc': []
            },
            {
                'title': ['Rise of the Tomb Raider', '古墓丽影：崛起'],
                'image': ['images/RiseOfTheTombRaider.jpeg', 'images/RiseOfTheTombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': [['Baba Yaga', '巴巴雅加']]
            },
            {
                'title': ['Uncharted: The Lost Legacy', '神秘海域：失落的遗产'],
                'image': ['images/UnchartedTheLostLegacy.jpeg', 'images/UnchartedTheLostLegacy.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': ['Uncharted 4: A Thief’s End', '神秘海域4：盗贼末路'],
                'image': ['images/Uncharted4.jpeg', 'images/Uncharted4.jpeg'],
                'author': ['Naughty Dog', '顽皮狗'],
                'dlc': []
            },
            {
                'title': ['Watch Dogs', '看门狗'],
                'image': ['images/WatchDogs.jpeg', 'images/WatchDogs.jpeg'],
                'author': ['Ubisoft', '育碧'],
                'dlc': [['Bad Blood', '坏血']]
            },
            {
                'title': ['Tomb Raider', '古墓丽影'],
                'image': ['images/TombRaider.jpeg', 'images/TombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力'],
                'dlc': []
            }]
    },
    {
        'title': 2016,
        'items': [
            {
                'title': ['Shadow Complex', '多重阴影'],
                'image': ['images/ShadowComplex.jpeg', 'images/ShadowComplex.jpeg'],
                'author': ['Chair Entertainment', 'Chair Entertainment'],
                'dlc': []
            },
            {
                'title': ['Quantum Break', '量子裂痕'],
                'image': ['images/QuantumBreak.jpeg', 'images/QuantumBreak.jpeg'],
                'author': ['Remedy Entertainment', '绿美迪娱乐'],
                'dlc': []
            },
            {
                'title': ['Firewatch', '看火人'],
                'image': ['images/Firewatch.jpeg', 'images/Firewatch.jpeg'],
                'author': ['Campo Santo', 'Campo Santo'],
                'dlc': []
            }]
    }]

export default games;