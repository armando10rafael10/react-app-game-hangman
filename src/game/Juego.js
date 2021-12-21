let Juego = {
	dictionaryVerbs:[
		{verbEnglish: "arise",simplePast:"Arose",pastParticiple:"Arisen",verbSpanish:"surgir" },
		{verbEnglish: "awake",simplePast:"Awoke",pastParticiple:"Awoken",verbSpanish:"despertar(se)" },
		{verbEnglish: "be",infinitive:"Be/am,are,is",simplePast:"Was/Were",pastParticiple:"Been",verbSpanish:"Ser/Estar"},
		{verbEnglish: "bear",simplePast:"Bore",pastParticiple:"Borne/Born",verbSpanish:"soportar" },
		{verbEnglish: "beat",simplePast:"Beat",pastParticiple:"Beaten",verbSpanish:"golpear" },
		{verbEnglish: "become",simplePast:"Became",pastParticiple:"Become",verbSpanish:"convertirse en"},
		{verbEnglish: "begin",simplePast:"Began",pastParticiple:"Begun",verbSpanish:"empezar"},
		{verbEnglish: "bend",simplePast:"Bent",pastParticiple:"Bent",verbSpanish:"doblar"},
		{verbEnglish: "bet",simplePast:"Bet",pastParticiple:"Bet",verbSpanish:"apostar"},
		{verbEnglish: "bid",simplePast:"Bid",pastParticiple:"Bid",verbSpanish:"pujar"},
		{verbEnglish: "bind",simplePast:"Bound",pastParticiple:"Bound",verbSpanish:"enlazar"},
		{verbEnglish: "bite",simplePast:"Bit",pastParticiple:"Bitten",verbSpanish:"morder"},
		{verbEnglish: "bleed",simplePast:"bled",pastParticiple:"bled",verbSpanish:"sangrar"},
		{verbEnglish: "blow", simplePast:"blew" ,pastParticiple:"blown" , verbSpanish:"soplar"},
		{verbEnglish: "break", simplePast:"broke" ,pastParticiple:"broken" , verbSpanish:"romper"},
		{verbEnglish: "breed", simplePast:"bred" ,pastParticiple:"bred" , verbSpanish:"criar"},
		{verbEnglish: "bring", simplePast:"brought" ,pastParticiple:"brought" , verbSpanish:"Traer/Llevar"},
		{verbEnglish: "build", simplePast:"built" ,pastParticiple:"built" , verbSpanish:"construir"},
		{verbEnglish: "burn", simplePast:"burnt" ,pastParticiple:"burnt" , verbSpanish:"quemar"},
		{verbEnglish: "burst", simplePast:"burst" ,pastParticiple:"burst" , verbSpanish:"estallar"},
		{verbEnglish: "buy", simplePast:"bought" ,pastParticiple:"bought" , verbSpanish:"comprar"},
		{verbEnglish: "cast", simplePast:"cast" ,pastParticiple:"cast" , verbSpanish:"tirar"},
		{verbEnglish: "catch", simplePast:"caught" ,pastParticiple:"caught" , verbSpanish:"coger"},
		{verbEnglish: "choose", simplePast:"chose" ,pastParticiple:"chosen" , verbSpanish:"elegir"},
		{verbEnglish: "cling", simplePast:"clung" ,pastParticiple:"clung" , verbSpanish:"aferrarse"},
		{verbEnglish: "come", simplePast:"came" ,pastParticiple:"come" , verbSpanish:"venir"},
		{verbEnglish: "cost", simplePast:"cost" ,pastParticiple:"cost" , verbSpanish:"costar"},
		{verbEnglish: "creep", simplePast:"crept" ,pastParticiple:"crept" , verbSpanish:"arrastrar"},
		{verbEnglish: "cut", simplePast:"cut" ,pastParticiple:"cut" , verbSpanish:"cortar"},
		{verbEnglish: "deal", simplePast:"dealt" ,pastParticiple:"dealt" , verbSpanish:"tratar"},
		{verbEnglish: "dig", simplePast:"dug" ,pastParticiple:"dug" , verbSpanish:"cavar"},
		{verbEnglish: "do", simplePast:"did" ,pastParticiple:"done" , verbSpanish:"hacer"},
		{verbEnglish: "draw", simplePast:"drew" ,pastParticiple:"drawn" , verbSpanish:"dibujar"},
		{verbEnglish: "dream", simplePast:"dreamt" ,pastParticiple:"dreamt" , verbSpanish:"soñar"},
		{verbEnglish: "drink", simplePast:"drank" ,pastParticiple:"drunk" , verbSpanish:"beber"},
		{verbEnglish: "drive", simplePast:"drove" ,pastParticiple:"driven" , verbSpanish:"conducir"},
		{verbEnglish: "eat", simplePast:"ate" ,pastParticiple:"eaten" , verbSpanish:"comer"},
		{verbEnglish: "fall", simplePast:"fell" ,pastParticiple:"fallen" , verbSpanish:"caer"},
		{verbEnglish: "feed", simplePast:"fed" ,pastParticiple:"fed" , verbSpanish:"alimentar"},
		{verbEnglish: "feel", simplePast:"felt" ,pastParticiple:"felt" , verbSpanish:"sentir"},
		{verbEnglish: "fight", simplePast:"fought" ,pastParticiple:"fought" , verbSpanish:"pelear/Luchar"},
		{verbEnglish: "find", simplePast:"found" ,pastParticiple:"found" , verbSpanish:"encontrar"},
		{verbEnglish: "flee", simplePast:"fled" ,pastParticiple:"fled" , verbSpanish:"huir"},
		{verbEnglish: "fly", simplePast:"flew" ,pastParticiple:"flown" , verbSpanish:"volar"},
		{verbEnglish: "forbid", simplePast:"forbade" ,pastParticiple:"forbidden" , verbSpanish:"prohibir"},
		{verbEnglish: "forget", simplePast:"forgot" ,pastParticiple:"forgotten" , verbSpanish:"olvidar"},
		{verbEnglish: "forgive", simplePast:"forgave" ,pastParticiple:"forgiven" , verbSpanish:"perdonar"},
		{verbEnglish: "freeze", simplePast:"froze" ,pastParticiple:"frozen" , verbSpanish:"helar"},
		{verbEnglish: "get", simplePast:"got" ,pastParticiple:"Got / Gotten" , verbSpanish:"conseguir"},
		{verbEnglish: "give", simplePast:"gave" ,pastParticiple:"given" , verbSpanish:"dar"},
		{verbEnglish: "go", simplePast:"went" ,pastParticiple:"gone" , verbSpanish:"irse"},
		{verbEnglish: "grind", simplePast:"Ground" ,pastParticiple:"Ground" , verbSpanish:"moler"},
		{verbEnglish: "grow", simplePast:"Grew" ,pastParticiple:"Grown" , verbSpanish:"crecer"},
		{verbEnglish: "hang", simplePast:"Hung" ,pastParticiple:"Hung" , verbSpanish:"colgar"},
		{verbEnglish: "have", simplePast:"Had" ,pastParticiple:"had" , verbSpanish:"haber/tener"},
		{verbEnglish: "hear", simplePast:"Heard" ,pastParticiple:"Heard" , verbSpanish:"escuchar"},
		{verbEnglish: "hide", simplePast:"Hid" ,pastParticiple:"Hidden" , verbSpanish:"esconder"},
		{verbEnglish: "hit", simplePast:"hit" ,pastParticiple:"hit" , verbSpanish:"golpear"},
		{verbEnglish: "hold", simplePast:"Held" ,pastParticiple:"Held" , verbSpanish:"agarrar"},
		{verbEnglish: "hurt", simplePast:"Hurt" ,pastParticiple:"Hurt" , verbSpanish:"hacer daño"},
		{verbEnglish: "keep", simplePast:"Kept" ,pastParticiple:"Kept" , verbSpanish:"mantener"},
		{verbEnglish: "kneel", simplePast:"Knelt" ,pastParticiple:"Knelt" , verbSpanish:"arrodillarse"},
		{verbEnglish: "know", simplePast:"knew" ,pastParticiple:"known" , verbSpanish:"saber/conocer"},
		{verbEnglish: "lay", simplePast:"Laid" ,pastParticiple:"Laid" , verbSpanish:"poner"},
		{verbEnglish: "lead", simplePast:"Led" ,pastParticiple:"Led" , verbSpanish:"llevar"},
		{verbEnglish: "lean", simplePast:"Leant" ,pastParticiple:"Leant" , verbSpanish:"apoyarse"},
		{verbEnglish: "leap", simplePast:"Leapt" ,pastParticiple:"Leapt" , verbSpanish:"brincar"},
		{verbEnglish: "learn", simplePast:"Learnt / Learned" ,pastParticiple:"Learnt / Learned" , verbSpanish:"aprender"},
		{verbEnglish: "leave", simplePast:"Left" ,pastParticiple:"Left" , verbSpanish:"dejar"},
		{verbEnglish: "lend", simplePast:"Lent" ,pastParticiple:"Lent" , verbSpanish:"prestar"},
		{verbEnglish: "let", simplePast:"Let" ,pastParticiple:"Let" , verbSpanish:"permitir"},
		{verbEnglish: "lie", simplePast:"Lay" ,pastParticiple:"Lain" , verbSpanish:"mentir"},
		{verbEnglish: "light", simplePast:"Lit" ,pastParticiple:"Lit" , verbSpanish:"encender"},
		{verbEnglish: "lose", simplePast:"Lost" ,pastParticiple:"Lost" , verbSpanish:"perder"},
		{verbEnglish: "make", simplePast:"Made" ,pastParticiple:"Made" , verbSpanish:"hacer"},
		{verbEnglish: "mean", simplePast:"Meant" ,pastParticiple:"Meant" , verbSpanish:"significar"},
		{verbEnglish: "meet", simplePast:"Met" ,pastParticiple:"Met" , verbSpanish:"encontrarse"},
		{verbEnglish: "overcome", simplePast:"Overcame" ,pastParticiple:"Overcome" , verbSpanish:"vencer"},
		{verbEnglish: "pay", simplePast:"Paid" ,pastParticiple:"Paid" , verbSpanish:"pagar"},
		{verbEnglish: "put", simplePast:"Put" ,pastParticiple:"Put" , verbSpanish:"poner"},
		{verbEnglish: "read", simplePast:"Read" ,pastParticiple:"Read" , verbSpanish:"leer"},
		{verbEnglish: "ride", simplePast:"Rode" ,pastParticiple:"Ridden" , verbSpanish:"montar"},
		{verbEnglish: "ring", simplePast:"Rang" ,pastParticiple:"Rung" , verbSpanish:"sonar"},
		{verbEnglish: "rise", simplePast:"Rose" ,pastParticiple:"Risen" , verbSpanish:"levantarse/elevar"},
		{verbEnglish: "run", simplePast:"Ran" ,pastParticiple:"Run" , verbSpanish:"correr"},
		{verbEnglish: "say", simplePast:"Said" ,pastParticiple:"Said" , verbSpanish:"decir"},
		{verbEnglish: "see", simplePast:"Saw" ,pastParticiple:"Seen" , verbSpanish:"ver"},
		{verbEnglish: "seek", simplePast:"Sought" ,pastParticiple:"Sought" , verbSpanish:"Buscar"},
		{verbEnglish: "sell", simplePast:"Sold" ,pastParticiple:"Sold" , verbSpanish:"vender"},
		{verbEnglish: "send", simplePast:"Sent" ,pastParticiple:"Sent" , verbSpanish:"enviar"},
		{verbEnglish: "set", simplePast:"Set" ,pastParticiple:"Set" , verbSpanish:"poner"},
		{verbEnglish: "sew", simplePast:"Sewed" ,pastParticiple:"Sewed / Sewn" , verbSpanish:"coser"},
		{verbEnglish: "shake", simplePast:"Shook" ,pastParticiple:"Shaken" , verbSpanish:"agitar/Sacudir"},
		{verbEnglish: "shine", simplePast:"Shone" ,pastParticiple:"Shone" , verbSpanish:"brillar"},
		{verbEnglish: "shoot", simplePast:"Shot" ,pastParticiple:"Shot" , verbSpanish:"disparar"},
		{verbEnglish: "show", simplePast:"Showed" ,pastParticiple:"Shown" , verbSpanish:"mostrar"},
		{verbEnglish: "shrink", simplePast:"Shrank" ,pastParticiple:"Shrunk" , verbSpanish:"encoger"},
		{verbEnglish: "shut", simplePast:"Shut" ,pastParticiple:"Shut" , verbSpanish:"cerrar"},
		{verbEnglish: "sing", simplePast:"Sang" ,pastParticiple:"Sung" , verbSpanish:"cantar"},
		{verbEnglish: "sink", simplePast:"sank" ,pastParticiple:"sunk" , verbSpanish:"Hundir"},
		{verbEnglish: "sit", simplePast:"Sat" ,pastParticiple:"Sat" , verbSpanish:"sentar"},
		{verbEnglish: "sleep", simplePast:"Slept" ,pastParticiple:"Slept" , verbSpanish:"sleep"},
		{verbEnglish: "slide", simplePast:"Slid" ,pastParticiple:"Slid" , verbSpanish:"resbalar"},
		{verbEnglish: "smell", simplePast:"Smelt" ,pastParticiple:"Smelt" , verbSpanish:"oler"},
		{verbEnglish: "sow", simplePast:"Sowed" ,pastParticiple:"Sowed / Sown" , verbSpanish:"sembrar"},
		{verbEnglish: "speak", simplePast:"Spoke" ,pastParticiple:"Spoken" , verbSpanish:"hablar"},
		{verbEnglish: "speed", simplePast:"Sped" ,pastParticiple:"Sped" , verbSpanish:"acelerar"},
		{verbEnglish: "spell", simplePast:"Spelt" ,pastParticiple:"Spelt" , verbSpanish:"deletrear"},
		{verbEnglish: "spend", simplePast:"Spent" ,pastParticiple:"Spent" , verbSpanish:"gastar"},
		{verbEnglish: "spill", simplePast:"Spilt / Spilled" ,pastParticiple:"Spilt / Spilled" , verbSpanish:"derramar"},
		{verbEnglish: "spit", simplePast:"Spat" ,pastParticiple:"Spat" , verbSpanish:"escupir"},
		{verbEnglish: "split", simplePast:"Split" ,pastParticiple:"Split" , verbSpanish:"partir/dividir"},
		{verbEnglish: "spoil", simplePast:"Spoilt / Spoiled" ,pastParticiple:"Spoilt / Spoiled" , verbSpanish:"estropear"},
		{verbEnglish: "spread", simplePast:"Spread" ,pastParticiple:"Spread" , verbSpanish:"extender/propagar"},
		{verbEnglish: "stand", simplePast:"Stood" ,pastParticiple:"Stood" , verbSpanish:"estar de pie"},
		{verbEnglish: "steal", simplePast:"Stole" ,pastParticiple:"Stolen" , verbSpanish:"robar"},
		{verbEnglish: "sting", simplePast:"Stung" ,pastParticiple:"Stung" , verbSpanish:"picar"},
		{verbEnglish: "stink", simplePast:"Stank/Stunk" ,pastParticiple:"Stunk" , verbSpanish:"apestar"},
		{verbEnglish: "strike", simplePast:"Struck" ,pastParticiple:"Struck" , verbSpanish:"golpear"},
		{verbEnglish: "strive", simplePast:"Strove" ,pastParticiple:"Striven" , verbSpanish:"esforzarse/esmerarse", url:"https://cdn.justpronounce.com/audio/english/us-female/strive-pronunciation-us-female.mp3"},
		{verbEnglish: "swear", simplePast:"Swore" ,pastParticiple:"Sworn" , verbSpanish:"jurar"},
		{verbEnglish: "sweat", simplePast:"Sweat" ,pastParticiple:"Sweat" , verbSpanish:"sudar"},
		{verbEnglish: "swell", simplePast:"Swelled" ,pastParticiple:"Swollen" , verbSpanish:"Hinchar"},
		{verbEnglish: "sweep", simplePast:"Swept" ,pastParticiple:"Swept" , verbSpanish:"barrer"},
		{verbEnglish: "swim", simplePast:"Swam" ,pastParticiple:"Swum" , verbSpanish:"nadar"},
		{verbEnglish: "Swing", simplePast:"Swung" ,pastParticiple:"Swung" , verbSpanish:"Columpiar/balancear"},
		{verbEnglish: "take", simplePast:"Took" ,pastParticiple:"Taken" , verbSpanish:"tomar"},
		{verbEnglish: "teach", simplePast:"Taught" ,pastParticiple:"Taught" , verbSpanish:"enseñar"},
		{verbEnglish: "tear", simplePast:"Tore" ,pastParticiple:"Tore" , verbSpanish:"rasgar"},
		{verbEnglish: "tell", simplePast:"Told" ,pastParticiple:"Told" , verbSpanish:"contar/decir"},
		{verbEnglish: "think", simplePast:"Thought" ,pastParticiple:"Thought" , verbSpanish:"pensar"},
		{verbEnglish: "throw", simplePast:"Threw" ,pastParticiple:"Thrown" , verbSpanish:"lanzar"},
		{verbEnglish: "tread", simplePast:"Trod" ,pastParticiple:"Trodden" , verbSpanish:"Pisar"},
		{verbEnglish: "undergo", simplePast:"Underwent" ,pastParticiple:"Undergone" , verbSpanish:"sufrir"},
		{verbEnglish: "understand", simplePast:"Understood" ,pastParticiple:"Understood" , verbSpanish:"entender"},
		{verbEnglish: "undertake", simplePast:"Undertook" ,pastParticiple:"Undertaken" , verbSpanish:"emprender"},
		{verbEnglish: "wake", simplePast:"Woke" ,pastParticiple:"Woken" , verbSpanish:"despertar"},
		{verbEnglish: "wear", simplePast:"Wore" ,pastParticiple:"Worn" , verbSpanish:"llevar(puesto)"},
		{verbEnglish: "weave", simplePast:"Wove" ,pastParticiple:"Woven" , verbSpanish:"tejer"},
		{verbEnglish: "weep", simplePast:"Wept" ,pastParticiple:"Wept" , verbSpanish:"llorar"},
		{verbEnglish: "wet", simplePast:"Wet" ,pastParticiple:"Wet" , verbSpanish:"Mojar"},
		{verbEnglish: "win", simplePast:"Won" ,pastParticiple:"Won" , verbSpanish:"ganar"},
		{verbEnglish: "wind", simplePast:"Wound" ,pastParticiple:"Wound" , verbSpanish:"enrollar"},
		{verbEnglish: "withdraw", simplePast:"Withdrew" ,pastParticiple:"Withdrawn" , verbSpanish:"retirar"},
		{verbEnglish: "wring", simplePast:"Wrung" ,pastParticiple:"Wrung" , verbSpanish:"Torcer"},
		{verbEnglish: "write", simplePast:"Wrote" ,pastParticiple:"Written" , verbSpanish:"escribir"},
	],
    MaxAttempt: 11,
    ListLinesVerb: [],
    ListLifes: [],
    ListAllIdOpacity: [],
    countAttemptError: 0,
    countAttemptTotally: 0,
    countAttemptTries: 0,
    verbo: "",
    verbInSpanish: "",
    Alphabet : ["A","B","C","D","E","F","G","H","I","J",
				"K","L","M","N","O","P","Q","R","S","T",
				"U","V","W","X","Y","Z"],
    AlphabetAF : ["a","b","c","d","e","f"],
	AlphabetGR : ["g","h","i","j","k","L","m","n",
				  "o","p","q","r"],
    AlphabetSZ : ["s","t","u","v","w","x","y","z"],
    upMoveImg : 0,
    styleAlertButton : 'alertButton',
    styleOpacityButton : 'opacityButton',
    typeLevel : "",
    levelBasic : [0,1,2,3,4,5,6,7,8,9,10],
    levelNormal : [0,1,3,5,6,7,8,9,10],
    levelDifficult : [0,1,3,5,8,10],
    levelHardcore : [1,5,8,10],
    levelUltraHardcore : [0,10],
    levelGod : [0],
    countOpenGame : 0,
    score : 0,
    ScoreMax : 0,
    ScoreMin : 0,
	nameLevel : "",
	ListByTypeVerb: [],
	ListTypeVerbName: ["all","A TO F","G TO R","S TO Z"],
	TypeVerbName: "",
	valuesDefault:{
		basic:{ modeName:"basic",max:10 ,min:0 ,countLevelsMax: 3 },
		normal:{ modeName:"normal",max:20 ,min:0 ,countLevelsMax: 6 },
		difficult:{ modeName:"difficult",max:30 ,min:0 ,countLevelsMax: 10},
		hardcore:{ modeName:"hardcore", max:80 ,min:0 ,countLevelsMax: 15},
		ultrahardcore:{ modeName:"ultraHardcore" ,max:200 ,min:0 ,countLevelsMax: 21},
		god:{ modeName:"God", max:420 ,min:0 ,countLevelsMax: 21}		
	},
	objScores:[],
	idCount: 0,

	ChangeImgHangman: function(){
		this.upMoveImg++;
    },
    CheckSameWords:function(){
		var count = 0;
		for(let x in this.ListLinesVerb){
			if( this.ListLinesVerb[x] === this.verbo[x] ){
				count++;
			}
		}
		if(count === this.verbo.length){
			return true;
		}else{
			return false;
		}
    },
    AddListAllIdOpacity: function(value){
		if( this.ListAllIdOpacity.includes(value) ){
			return false;
		}else{
			this.ListAllIdOpacity.push(value);
			return true;
		}
    },
    FullListLife: function(){
		for(let j=0; j<this.MaxAttempt; j++){
			this.ListLifes.push(j+1);
		}
    },
    RemoveLife: function(){
		this.ListLifes.pop();
    },
    emptyLifes: function(){
		if(this.ListLifes.length === 0){
			return true;
		}else{
			return false;
		}
    },
    restartValues: function(){
		this.ListLinesVerb = [];
		this.ListLifes = [];
		this.ListAllIdOpacity = [];
		this.countAttemptError = 0;
		this.countAttemptTotally = 0;
		this.countAttemptTries = 0;
		this.verbo = "";
		this.upMoveImg = 0;
		console.log("restart values");
	},
    arrayRandomNoRepeat: function (arrayTotally,tamNumRandom) {
		var arrayEmpty = [];
		var quantityNumbers = tamNumRandom;
		var until = arrayTotally.length;

		while(arrayEmpty.length < quantityNumbers && quantityNumbers < until){
			var numberRandom = Math.floor(Math.random()*until);
			if(!arrayEmpty.some(function(e){ return e === numberRandom } )){
				arrayEmpty.push(numberRandom);
			}
		}
		return arrayEmpty;
    },
    ReplaceCharacterScript: function(position, value){
		this.ListLinesVerb[position] = value;
		console.log("changing :"+this.ListLinesVerb)
    },
    SetCountAttemptsErrors: function(){
		this.countAttemptError++;
    },
    SetCountAttemptsTotally: function(){
		this.countAttemptTotally++;
    },
    SetCountAttemptsTries: function(){
		this.countAttemptTries++;
    },
    defaultTypeVerbBasic: function(){
		this.ListByTypeVerb = this.dictionaryVerbs;
		this.TypeVerbName = "all";
    },
    Listverbtype: function(v){
		if(v === 0){
			this.ListByTypeVerb = this.dictionaryVerbs; 
			this.TypeVerbName = this.ListTypeVerbName[0];
			console.log("lets go to change all the verbs");
		}else if(v === 1){
			this.ListByTypeVerb = this.FullTypeVerbs(this.AlphabetAF);
			this.TypeVerbName = this.ListTypeVerbName[1];
			console.log("lets go to change verb for af");
		}else if(v === 2){
			this.ListByTypeVerb = this.FullTypeVerbs(this.AlphabetGR);
			this.TypeVerbName = this.ListTypeVerbName[2];
			console.log("lets go to change verb for gr");
		}else{
			this.ListByTypeVerb = this.FullTypeVerbs(this.AlphabetSZ);
			this.TypeVerbName = this.ListTypeVerbName[3];
			console.log("lets go to change verb for sz");
		}
    },
    FullTypeVerbs(array){
		var typeverb = [];
		for(let x in this.dictionaryVerbs){
			let letter = this.dictionaryVerbs[x].verbEnglish.charAt(0);
			console.log("pass letter : "+letter)
			if(this.CheckArrayByLetters(letter , array ) === true){
				typeverb.push(this.dictionaryVerbs[x]);
			}
		}
		console.log("pass typeverb : "+typeverb)
		return typeverb;
    },
    CheckArrayByLetters: function(letter,arreglo){
		for(let k in arreglo){
			if(arreglo[k] === letter){
			return true;
			}
		}
		return false;
    },
    GetVerbRandom: function(){
		var verbs = this.arrayRandomNoRepeat(this.ListByTypeVerb,1);	
		this.verbo = this.ListByTypeVerb[verbs].verbEnglish;
		this.verbInSpanish= this.ListByTypeVerb[verbs].verbSpanish;
		console.log("1.- pass-verbs : "+verbs);	
		console.log("1.- pass verbo ingles: "+this.verbo);
		console.log("1.- pass verbo español: "+this.verbInSpanish);
		this.GenerateLineWord();
		console.log("generate verb random");
    },
    GenerateLineWord: function(){
		this.ListLinesVerb = [];
		var word = this.verbo;
		for (const x in word) {
			this.ListLinesVerb.push(word[x].replace(/./g, "_") );
		}
    },
    SetCountOpenGame: function(){
		this.countOpenGame++;
    },
    CleanCountOpenGame: function(){
		this.countOpenGame = 0;
    },
    restartMaxCount: function(){
		this.MaxAttempt = this.levelBasic.length;
	},
	AddScoreToList: function(){
		this.idCount = this.idCount+1;
		this.objScores.push({
			id:this.idCount,
			level:this.countOpenGame,
			mode:this.nameLevel,
			score:this.score,
			modeType:this.TypeVerbName,
			maxLevel:this.ScoreMax,
			placePos:"",
			placePosName:""
		});
		this.checkMore();
	},
	checkMore: function(){
		this.orderMaxThreeScores();
		this.subOrderByFeaturesThreeScores();
		this.validateMaxThreeScores();
	},
	orderMaxThreeScores: function(){
		var aux = null;
		// orden the array
		for(var i = 0; i<this.objScores.length; i++){
			for(var j = i+1; j<this.objScores.length; j++){
				if( this.objScores[i].score < this.objScores[j].score ){
					aux = this.objScores[j];
					this.objScores[j] = this.objScores[i];
					this.objScores[i] = aux;
				}
			}
		}
	},
	subOrderByFeaturesThreeScores: function(){
		var auxChangeValue = null;
		for(var i = 0; i<this.objScores.length; i++){
			for(var j = i+1; j<this.objScores.length; j++){
				if(this.objScores[i].score === this.objScores[j].score){
					if(this.objScores[i].level < this.objScores[j].level){
						auxChangeValue = this.objScores[i]; 
						this.objScores[i] = this.objScores[j];
						this.objScores[j] = auxChangeValue;
					}else if(this.objScores[i].level === this.objScores[j].level){
						console.log("it has equal level:"+this.objScores[i].level);
						if(this.objScores[i].maxLevel === this.objScores[j].maxLevel){
							if(this.objScores[i].id < this.objScores[j].id){
								auxChangeValue = this.objScores[i]; 
								this.objScores[i] = this.objScores[j];
								this.objScores[j] = auxChangeValue;
							}
						}else if(this.objScores[i].maxLevel < this.objScores[j].maxLevel){
							auxChangeValue = this.objScores[i]; 
							this.objScores[i] = this.objScores[j];
							this.objScores[j] = auxChangeValue;
						}else{
							console.log("nothing equal max level");
						}
					}else{
						console.log("nothing equal score")
					}
				}
			}
		}
	},
	validateMaxThreeScores: function(){
		if(this.objScores.length > 3){
			this.objScores.pop();
		}
		if(this.objScores.length === 1){
			this.objScores[0].placePos = "1°";
			this.objScores[0].placePosName= "first";
		}else if(this.objScores.length === 2){
			this.objScores[0].placePos = "1°";
			this.objScores[1].placePos = "2°";
			this.objScores[0].placePosName= "first";
			this.objScores[1].placePosName= "second";
		}else if(this.objScores.length === 3){
			this.objScores[0].placePos = "1°";
			this.objScores[1].placePos = "2°";
			this.objScores[2].placePos = "3°";
			this.objScores[0].placePosName= "first";
			this.objScores[1].placePosName= "second";
			this.objScores[2].placePosName= "third";
		}
	},
    SetScore: function(attempt){
		if(attempt === true){
			this.score += this.ScoreMax;
		}else{
			if(!this.score === 0){
			this.score -= this.ScoreMin;
			}
		}
    },
    ClearScore: function(){
		this.score = 0;
    },
    restartValuesAdditionalsToScore: function(){
		this.score = 0;
		this.ScoreMax = 0;
		this.ScoreMin = 0;
		this.countOpenGame = 0;
    },
    SetScoreByLevels: function(){
		if(this.countOpenGame <= this.valuesDefault.basic.countLevelsMax ){
			this.ScoreMax = this.valuesDefault.basic.max;
			this.ScoreMin = this.valuesDefault.basic.min;
			this.nameLevel = this.valuesDefault.basic.modeName;
			this.typeLevel = this.levelBasic;
			this.MaxAttempt = this.levelBasic.length;
			console.log("the level "+this.nameLevel+" now have "+this.MaxAttempt+" attempts");
		}
		if(this.countOpenGame > this.valuesDefault.basic.countLevelsMax && this.countOpenGame <= this.valuesDefault.normal.countLevelsMax ){
			this.ScoreMax = this.valuesDefault.normal.max;
			this.ScoreMin = this.valuesDefault.normal.min;
			this.nameLevel = this.valuesDefault.normal.modeName;
			this.typeLevel = this.levelNormal;
			this.MaxAttempt = this.levelNormal.length;
			console.log("the level "+this.nameLevel+" now have "+this.MaxAttempt+" attempts");
		}
		if(this.countOpenGame > this.valuesDefault.normal.countLevelsMax && this.countOpenGame <= this.valuesDefault.difficult.countLevelsMax ){
			this.ScoreMax = this.valuesDefault.difficult.max;
			this.ScoreMin = this.valuesDefault.difficult.min;
			this.nameLevel = this.valuesDefault.difficult.modeName;
			this.typeLevel = this.levelDifficult;
			this.MaxAttempt = this.levelDifficult.length;
			console.log("the level "+this.nameLevel+" now have "+this.MaxAttempt+" attempts");
		}
		if(this.countOpenGame > this.valuesDefault.difficult.countLevelsMax && this.countOpenGame <= this.valuesDefault.hardcore.countLevelsMax ){
			this.ScoreMax = this.valuesDefault.hardcore.max;
			this.ScoreMin = this.valuesDefault.hardcore.min;
			this.nameLevel = this.valuesDefault.hardcore.modeName;
			this.typeLevel = this.levelHardcore;
			this.MaxAttempt = this.levelHardcore.length;
			console.log("the level "+this.nameLevel+" now have "+this.MaxAttempt+" attempts");
		}
		if(this.countOpenGame > this.valuesDefault.hardcore.countLevelsMax && this.countOpenGame <= this.valuesDefault.ultrahardcore.countLevelsMax ){
			this.ScoreMax = this.valuesDefault.ultrahardcore.max;
			this.ScoreMin = this.valuesDefault.ultrahardcore.min;
			this.nameLevel = this.valuesDefault.ultrahardcore.modeName;
			this.typeLevel = this.levelUltraHardcore;
			this.MaxAttempt = this.levelUltraHardcore.length;
			console.log("the level "+this.nameLevel+" now have "+this.MaxAttempt+" attempts");
		}
		if(this.countOpenGame > this.valuesDefault.god.countLevelsMax ){
			this.ScoreMax = this.valuesDefault.god.max;
			this.ScoreMin = this.valuesDefault.god.min;
			this.nameLevel = this.valuesDefault.god.modeName;
			this.typeLevel = this.levelGod;
			this.MaxAttempt = this.levelGod.length;
			console.log("the level "+this.nameLevel+" now have "+this.MaxAttempt+" attempts");
		}
    }
}
export default Juego