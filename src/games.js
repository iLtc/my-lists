const games = [
    {
        'title': 2021,
        'items': [
            {
                'title': ["Shadow of the Tomb Raider", "古墓丽影：暗影"],
                'link': [
                    'https://tombraider.square-enix-games.com/en-us',
                    'https://tombraider.square-enix-games.com/en-us'
                ],
                'image': ['images/ShadowOfTheTombRaider.jpeg', 'images/ShadowOfTheTombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力']
            },
            {
                'title': [
                    "Marvel's Spider-Man",
                    "漫威蜘蛛侠"
                ],
                'link': [
                    'https://www.playstation.com/en-us/games/marvels-spider-man/',
                    'https://www.playstation.com/en-us/games/marvels-spider-man/'
                ],
                'image': ['images/SpiderMan.jpeg', 'images/SpiderMan.jpeg'],
                'author': ['Insomniac Games', 'Insomniac Games']
            },
            {
                'title': [
                    'Cyberpunk 2077',
                    '赛博朋克 2077'
                ],
                'link': ['https://www.cyberpunk.net/', 'https://www.cyberpunk.net/'],
                'image': ['images/Cyberpunk2077.jpeg', 'images/Cyberpunk2077.jpeg'],
                'author': ['CD Projekt', 'CD Projekt']
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
                'link': ['https://www.ubisoft.com/en-us/game/watch-dogs/legion', 'https://www.ubisoft.com/en-us/game/watch-dogs/legion'],
                'image': ['images/WatchDogsLegion.webp', 'images/WatchDogsLegion.webp'],
                'author': ['Ubisoft', '育碧']
            },
            {
                'title': ['Watch Dogs 2', '看门狗2'],
                'link': ['https://www.ubisoft.com/en-us/game/watch-dogs/watch-dogs-2', 'https://www.ubisoft.com/en-us/game/watch-dogs/watch-dogs-2'],
                'image': ['images/WatchDogs2.jpeg', 'images/WatchDogs2.jpeg'],
                'author': ['Ubisoft', '育碧']
            },
            {
                'title': ['The Invisible Guardian', '隐形守护者'],
                'link': ['https://zh.wikipedia.org/wiki/%E9%9A%90%E5%BD%A2%E5%AE%88%E6%8A%A4%E8%80%85', 'https://zh.wikipedia.org/wiki/%E9%9A%90%E5%BD%A2%E5%AE%88%E6%8A%A4%E8%80%85'],
                'image': ['images/TheInvisibleGuardian.jpeg', 'images/TheInvisibleGuardian.jpeg'],
                'author': ['New One Studio', 'New One Studio']
            },
            {
                'title': ['Rise of the Tomb Raider: Baba Yaga', '古墓丽影：崛起：巴巴雅加'],
                'link': ['https://en.wikipedia.org/wiki/Rise_of_the_Tomb_Raider', 'https://en.wikipedia.org/wiki/Rise_of_the_Tomb_Raider'],
                'image': ['images/RiseOfTheTombRaiderBabaYaga.jpeg', 'images/RiseOfTheTombRaiderBabaYaga.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力']
            },
            {
                'title': ['Rise of the Tomb Raider', '古墓丽影：崛起'],
                'link': ['https://en.wikipedia.org/wiki/Rise_of_the_Tomb_Raider', 'https://en.wikipedia.org/wiki/Rise_of_the_Tomb_Raider'],
                'image': ['images/RiseOfTheTombRaider.jpeg', 'images/RiseOfTheTombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力']
            },
            {
                'title': ['Uncharted: The Lost Legacy', '神秘海域：失落的遗产'],
                'link': ['https://www.unchartedthegame.com/en-us/games/uncharted-the-lost-legacy/', 'https://www.unchartedthegame.com/en-us/games/uncharted-the-lost-legacy/'],
                'image': ['images/UnchartedTheLostLegacy.jpeg', 'images/UnchartedTheLostLegacy.jpeg'],
                'author': ['Naughty Dog', '顽皮狗']
            },
            {
                'title': ['Uncharted 4: A Thief’s End', '神秘海域4：盗贼末路'],
                'link': ['https://www.unchartedthegame.com/en-us/games/uncharted-4/', 'https://www.unchartedthegame.com/en-us/games/uncharted-4/'],
                'image': ['images/Uncharted4.jpeg', 'images/Uncharted4.jpeg'],
                'author': ['Naughty Dog', '顽皮狗']
            },
            {
                'title': ['Watch Dogs: Bad Blood', '看门狗：坏血'],
                'link': ['https://en.wikipedia.org/wiki/Watch_Dogs', 'https://en.wikipedia.org/wiki/Watch_Dogs'],
                'image': ['images/WatchDogsBadBlood.webp', 'images/WatchDogsBadBlood.webp'],
                'author': ['Ubisoft', '育碧']
            },
            {
                'title': ['Watch Dogs', '看门狗'],
                'link': ['https://en.wikipedia.org/wiki/Watch_Dogs', 'https://en.wikipedia.org/wiki/Watch_Dogs'],
                'image': ['images/WatchDogs.webp', 'images/WatchDogs.webp'],
                'author': ['Ubisoft', '育碧']
            },
            {
                'title': ['Tomb Raider', '古墓丽影'],
                'link': ['https://en.wikipedia.org/wiki/Tomb_Raider', 'https://en.wikipedia.org/wiki/Tomb_Raider'],
                'image': ['images/TombRaider.jpeg', 'images/TombRaider.jpeg'],
                'author': ['Crystal Dynamics', '晶体动力']
            }]
    },
    {
        'title': 2016,
        'items': [
            {
                'title': ['Shadow Complex', '多重阴影'],
                'link': ['https://www.epicgames.com/shadowcomplex/', 'https://www.epicgames.com/shadowcomplex/'],
                'image': ['images/ShadowComplex.jpeg', 'images/ShadowComplex.jpeg'],
                'author': ['Chair Entertainment', 'Chair Entertainment']
            },
            {
                'title': ['Quantum Break', '量子裂痕'],
                'link': ['https://www.remedygames.com/games/quantumbreak/', 'https://www.remedygames.com/games/quantumbreak/'],
                'image': ['images/QuantumBreak.jpeg', 'images/QuantumBreak.jpeg'],
                'author': ['Remedy Entertainment', '绿美迪娱乐']
            },
            {
                'title': ['Firewatch', '看火人'],
                'link': ['https://www.firewatchgame.com/', 'https://www.firewatchgame.com/'],
                'image': ['images/Firewatch.jpeg', 'images/Firewatch.jpeg'],
                'author': ['Campo Santo', 'Campo Santo']
            }]
    }]

export default games;