const games = [
    {
        title: 2025,
        items: [
            {
                title: ["Factorio", "异星工厂"],
                image: ["Factorio.jpg", "Factorio.jpg"],
                author: ["Wube Software", "Wube Software"],
            },
        ],
    },
    {
        title: 2024,
        items: [
            {
                title: [
                    "Indiana Jones and the Great Circle",
                    "夺宝奇兵：古老之圈",
                ],
                image: [
                    "IndianaJonesAndTheGreatCircle.jpg",
                    "IndianaJonesAndTheGreatCircleCN.jpg",
                ],
                author: ["MachineGames", "MachineGames"],
            },
            {
                title: ["Black Myth: Wukong", "黑神话：悟空"],
                image: ["BlackMythWukong.jpeg", "BlackMythWukongCN.jpg"],
                author: ["Game Science", "游戏科学"],
            },
            {
                title: [
                    "Duck Detective: The Secret Salami",
                    "Duck Detective: The Secret Salami",
                ],
                image: [
                    "DuckDetectiveTheSecretSalami.jpeg",
                    "DuckDetectiveTheSecretSalami.jpeg",
                ],
                author: ["Happy Broccoli Games", "Happy Broccoli Games"],
            },
            {
                title: ["Murders on the Yangtze River", "山河旅探"],
                image: [
                    "MurdersOnTheYangtzeRiver.jpg",
                    "MurdersOnTheYangtzeRiverCN.jpg",
                ],
                author: ["OMEGAMES STUDIO", "奥秘之家"],
            },
            {
                title: ["Firework", "烟火"],
                image: ["Firework.jpg", "FireworkCN.jpg"],
                author: ["Shiying Studio", "拾英工作室"],
            },
            {
                title: ["Alan Wake 2", "心灵杀手2"],
                image: ["AlanWake2.jpg", "AlanWake2.jpg"],
                author: ["Remedy Entertainment", "绿美迪娱乐"],
                dlc: [["Night Springs", "野泉镇"]],
            },
            {
                title: ["Alan Wake's American Nightmare", "心灵杀手：美国噩梦"],
                image: [
                    "AlanWakesAmericanNightmare.jpg",
                    "AlanWakesAmericanNightmare.jpg",
                ],
                author: ["Remedy Entertainment", "绿美迪娱乐"],
            },
            {
                title: ["Senua's Saga: Hellblade II", "地狱之刃II：塞娜的传说"],
                image: [
                    "SenuasSagaHellbladeII.jpeg",
                    "SenuasSagaHellbladeII.jpeg",
                ],
                author: ["Ninja Theory", "忍者理论"],
            },
            {
                title: ["Hellblade: Senua's Sacrifice", "地狱之刃：塞娜的献祭"],
                image: [
                    "HellbladeSenuasSacrifice.jpeg",
                    "HellbladeSenuasSacrifice.jpeg",
                ],
                author: ["Ninja Theory", "忍者理论"],
            },
            {
                title: ["The Rewinder", "山海旅人"],
                image: ["TheRewinder.jpeg", "TheRewinder.jpeg"],
                author: ["Misty Mountain Studio", "云山小雨工作室"],
                dlc: [["Root of Evil", "夜行柳渡"]],
            },
            {
                title: ["Horizon Forbidden West", "地平线 西之绝境"],
                image: [
                    "HorizonForbiddenWest.jpeg",
                    "HorizonForbiddenWest.jpeg",
                ],
                author: ["Guerrilla Games", "游击队工作室"],
                dlc: [["Burning Shores", "炙炎海岸"]],
            },
        ],
    },
    {
        title: 2023,
        items: [
            {
                title: ["Horizon Zero Dawn", "地平线 零之曙光"],
                image: ["HorizonZeroDawn.jpg", "HorizonZeroDawn.jpg"],
                author: ["Guerrilla Games", "游击队工作室"],
                dlc: [["The Frozen Wilds", "冰尘雪野"]],
            },
            {
                title: ["Control", "控制"],
                image: ["Control.jpeg", "Control.jpeg"],
                author: ["Remedy Entertainment", "绿美迪娱乐"],
                dlc: [
                    ["The Foundation", "The Foundation"],
                    ["AWE", "AWE"],
                ],
            },
            {
                title: ["Limbo", "Limbo"],
                image: ["Limbo.jpeg", "Limbo.jpeg"],
                author: ["Playdead", "Playdead"],
            },
            {
                title: ["Inside", "Inside"],
                image: ["Inside.jpeg", "Inside.jpeg"],
                author: ["Playdead", "Playdead"],
            },
            {
                title: ["Marvel's Spider-Man 2", "漫威蜘蛛侠2"],
                image: ["SpiderMan2.jpeg", "SpiderMan2.jpeg"],
                author: ["Insomniac Games", "Insomniac Games"],
            },
            {
                title: ["Hogwarts Legacy", "霍格华兹的传承"],
                image: ["HogwartsLegacy.jpeg", "HogwartsLegacy.jpeg"],
                author: ["Avalanche Software", "艾薇岚奇软件"],
            },
            {
                title: ["Venba", "Venba"],
                image: ["Venba.jpg", "Venba.jpg"],
                author: ["Visai Games", "Visai Games"],
            },
            {
                title: ["Mafia II", "四海兄弟II"],
                image: ["Mafia2.jpeg", "Mafia2.jpeg"],
                author: ["2K Czech", "2K Czech"],
            },
            {
                title: ["The Legend of Sword and Fairy", "仙剑奇侠传"],
                image: [
                    "TheLegendOfSwordAndFairy.jpeg",
                    "TheLegendOfSwordAndFairy.jpeg",
                ],
                author: ["Softstar Entertainment", "大宇资讯"],
            },
            {
                title: ["Star Wars Jedi: Survivor", "星球大战 绝地：幸存者"],
                image: ["StarWarsJediSurvivor.jpg", "StarWarsJediSurvivor.jpg"],
                author: ["Respawn Entertainment", "重生娱乐"],
            },
        ],
    },
    {
        title: 2022,
        items: [
            {
                title: ["God of War Ragnarök", "战神：诸神黄昏"],
                image: ["GodOfWarRagnarök.webp", "GodOfWarRagnarök.webp"],
                author: [
                    "SIE Santa Monica Studio",
                    "索尼互动娱乐圣莫尼卡工作室",
                ],
            },
            {
                title: ["A Plague Tale: Requiem", "瘟疫传说：安魂曲"],
                image: ["APlagueTaleRequiem.jpeg", "APlagueTaleRequiem.jpeg"],
                author: ["Asobo Studio", "Asobo 游戏工作室"],
            },
            {
                title: ["A Plague Tale: Innocence", "瘟疫传说：无罪"],
                image: [
                    "APlagueTaleInnocence.jpeg",
                    "APlagueTaleInnocence.jpeg",
                ],
                author: ["Asobo Studio", "Asobo 游戏工作室"],
            },
            {
                title: ["Alan Wake", "心灵杀手"],
                image: ["AlanWake.jpeg", "AlanWake.jpeg"],
                author: ["Remedy Entertainment", "绿美迪娱乐"],
                dlc: [
                    ["The Signal", "信号"],
                    ["The Writer", "作家"],
                ],
            },
            {
                title: ["Stray", "Stray"],
                image: ["Stray.jpeg", "Stray.jpeg"],
                author: ["BlueTwelve Studio", "BlueTwelve Studio"],
            },
            {
                title: ["God of War", "战神"],
                image: ["GodOfWar.jpeg", "GodOfWar.jpeg"],
                author: [
                    "SIE Santa Monica Studio",
                    "索尼互动娱乐圣莫尼卡工作室",
                ],
            },
            {
                title: ["Assassin's Creed II", "刺客信条II"],
                image: ["AssassinsCreed2.jpeg", "AssassinsCreed2.jpeg"],
                author: ["Ubisoft", "育碧"],
            },
            {
                title: ["Assassin's Creed", "刺客信条"],
                image: ["AssassinsCreed1.jpeg", "AssassinsCreed1.jpeg"],
                author: ["Ubisoft", "育碧"],
            },
            {
                title: ["The Last of Us Part II", "最后生还者 第II章"],
                image: ["TheLastOfUsPart2.webp", "TheLastOfUsPart2.webp"],
                author: ["Naughty Dog", "顽皮狗"],
            },
            {
                title: ["The Last of Us", "最后生还者"],
                image: ["TheLastOfUs.jpeg", "TheLastOfUs.jpeg"],
                author: ["Naughty Dog", "顽皮狗"],
                dlc: [["Left Behind", "抛诸脑后"]],
            },
            {
                title: [
                    "Uncharted 3: Drake's Deception",
                    "神秘海域3：德雷克的诡计",
                ],
                image: [
                    "UnchartedDrakesDeception.jpeg",
                    "UnchartedDrakesDeception.jpeg",
                ],
                author: ["Naughty Dog", "顽皮狗"],
            },
            {
                title: ["Uncharted 2: Among Thieves", "神秘海域2：纵横四海"],
                image: [
                    "UnchartedAmongThieves.jpeg",
                    "UnchartedAmongThieves.jpeg",
                ],
                author: ["Naughty Dog", "顽皮狗"],
            },
            {
                title: [
                    "Uncharted: Drake's Fortune",
                    "神秘海域：德雷克船长的宝藏",
                ],
                image: [
                    "UnchartedDrakesFortune.webp",
                    "UnchartedDrakesFortune.webp",
                ],
                author: ["Naughty Dog", "顽皮狗"],
            },
            {
                title: ["Mafia", "四海兄弟"],
                image: ["Mafia.jpeg", "Mafia.jpeg"],
                author: ["Hangar 13", "Hangar 13"],
            },
        ],
    },
    {
        title: 2021,
        items: [
            {
                title: ["Marvel's Guardians of the Galaxy", "漫威银河护卫队"],
                image: [
                    "GuardiansOfTheGalaxy.jpeg",
                    "GuardiansOfTheGalaxy.jpeg",
                ],
                author: ["Eidos-Montréal", "艺夺蒙特利尔"],
            },
            {
                title: ["Life Is Strange: True Colors", "奇异人生：本色"],
                image: [
                    "LifeIsStrangeTrueColors.jpeg",
                    "LifeIsStrangeTrueColors.jpeg",
                ],
                author: ["Deck Nine", "Deck Nine"],
                dlc: [["Wavelengths", "波长"]],
            },
            {
                title: [
                    "Star Wars Jedi: Fallen Order",
                    "星球大战 绝地：组织陨落",
                ],
                image: [
                    "StarWarsJediFallenOrder.jpeg",
                    "StarWarsJediFallenOrder.jpeg",
                ],
                author: ["Respawn Entertainment", "重生娱乐"],
            },
            {
                title: ["Detroit: Become Human", "底特律：化身为人"],
                image: ["DetroitBecomeHuman.jpeg", "DetroitBecomeHuman.jpeg"],
                author: ["Quantic Dream", "Quantic Dream"],
            },
            {
                title: [
                    "Marvel's Spider-Man: Miles Morales",
                    "漫威蜘蛛侠：迈尔斯·莫拉雷斯",
                ],
                image: [
                    "SpiderManMilesMorales.webp",
                    "SpiderManMilesMorales.webp",
                ],
                author: ["Insomniac Games", "Insomniac Games"],
            },
            {
                title: ["Marvel's Avengers", "漫威复仇者"],
                image: ["Avengers.jpeg", "Avengers.jpeg"],
                author: ["Crystal Dynamics", "晶体动力"],
                dlc: [
                    ["Kate Bishop - Taking AIM", "凯特·毕肖普之击败先锋科技"],
                    ["Hawkeye - Future Imperfect", "鹰眼之不完美的未来"],
                ],
            },
            {
                title: ["Shadow of the Tomb Raider", "古墓丽影：暗影"],
                image: [
                    "ShadowOfTheTombRaider.jpeg",
                    "ShadowOfTheTombRaider.jpeg",
                ],
                author: ["Crystal Dynamics", "晶体动力"],
            },
            {
                title: ["Marvel's Spider-Man", "漫威蜘蛛侠"],
                image: ["SpiderMan.webp", "SpiderMan.webp"],
                author: ["Insomniac Games", "Insomniac Games"],
                dlc: [["The City That Never Sleeps", "不夜城"]],
            },
            {
                title: ["Cyberpunk 2077", "赛博朋克 2077"],
                image: ["Cyberpunk2077.jpeg", "Cyberpunk2077.jpeg"],
                author: ["CD Projekt", "CD Projekt"],
            },
        ],
    },
    {
        title: 2020,
        items: [
            {
                title: ["Watch Dogs: Legion", "看门狗：军团"],
                image: ["WatchDogsLegion.webp", "WatchDogsLegion.webp"],
                author: ["Ubisoft", "育碧"],
                dlc: [["Bloodline", "血脉相承"]],
            },
            {
                title: ["Watch Dogs 2", "看门狗2"],
                image: ["WatchDogs2.jpeg", "WatchDogs2.jpeg"],
                author: ["Ubisoft", "育碧"],
            },
            {
                title: ["The Invisible Guardian", "隐形守护者"],
                image: [
                    "TheInvisibleGuardian.jpeg",
                    "TheInvisibleGuardian.jpeg",
                ],
                author: ["New One Studio", "New One Studio"],
            },
            {
                title: ["Rise of the Tomb Raider", "古墓丽影：崛起"],
                image: ["RiseOfTheTombRaider.jpeg", "RiseOfTheTombRaider.jpeg"],
                author: ["Crystal Dynamics", "晶体动力"],
                dlc: [["Baba Yaga", "巴巴雅加"]],
            },
            {
                title: ["Uncharted: The Lost Legacy", "神秘海域：失落的遗产"],
                image: [
                    "UnchartedTheLostLegacy.jpeg",
                    "UnchartedTheLostLegacy.jpeg",
                ],
                author: ["Naughty Dog", "顽皮狗"],
            },
            {
                title: ["Uncharted 4: A Thief’s End", "神秘海域4：盗贼末路"],
                image: ["Uncharted4.jpeg", "Uncharted4.jpeg"],
                author: ["Naughty Dog", "顽皮狗"],
            },
            {
                title: ["Watch Dogs", "看门狗"],
                image: ["WatchDogs.jpeg", "WatchDogs.jpeg"],
                author: ["Ubisoft", "育碧"],
                dlc: [["Bad Blood", "坏血"]],
            },
            {
                title: ["Tomb Raider", "古墓丽影"],
                image: ["TombRaider.jpeg", "TombRaider.jpeg"],
                author: ["Crystal Dynamics", "晶体动力"],
            },
        ],
    },
    {
        title: 2016,
        items: [
            {
                title: ["Shadow Complex", "多重阴影"],
                image: ["ShadowComplex.jpeg", "ShadowComplex.jpeg"],
                author: ["Chair Entertainment", "Chair Entertainment"],
            },
            {
                title: ["Quantum Break", "量子裂痕"],
                image: ["QuantumBreak.jpeg", "QuantumBreak.jpeg"],
                author: ["Remedy Entertainment", "绿美迪娱乐"],
            },
            {
                title: ["Firewatch", "看火人"],
                image: ["Firewatch.jpeg", "Firewatch.jpeg"],
                author: ["Campo Santo", "Campo Santo"],
            },
        ],
    },
];

export default games;
