Vue.component('term', {
  data: function(){
    return {
      text: '',
      printed: [],
      '~': {
        projects: {
          type: 'dir',
          TazerChess: {
            type: 'project',
            description: "A project inspired by Michael Reeves. Play chess on chess.com, but you get electrocuted every time you blunder",
            content: "brrrr",
            github: "https://github.com/the42ndturtle/TazerChess",
          },
          PatkerPlot: {
            type: 'project',
            description: 'A simple UI for chart.js',
            content: 'patker plot content',
            github: "https://github.com/the42ndturtle/patkerplot",
          },
          nickisnotnuzlocke: {
            type: 'project',
            description: 'A project that allows for twitch chat to interact with Pokemon GBA games',
            content: 'nickisnotnuzlocke content',
            github: 'https://github.com/the42ndturtle/nickisnotnuzlocke'
          },
          'idle-game': {
            type: 'project',
            description: 'an unfinished idle game that takes place in space',
            content: 'idle game content',
            github: 'https://github.com/the42ndturtle/idlegame',
            link: 'https://idletestgame.herokuapp.com',
          },
          'multiplayer-snake': {
            type: 'project',
            description: 'a simple local multiplayer snake game',
            content: 'multiplayer snake content',
            github: 'https://github.com/the42ndturtle/snake',
          },
          'typing-game': {
            type: 'project',
            description: 'a typing game with a twist! all the prompts are generated from my friends\'s high school essays which contain many spelling errors',
            content: 'typing game content',
            github: "https://github.com/the42ndturtle/learntotypewithpatker",
          },
          needle: {
            type: 'project',
            description: 'a simulation that displays the ratio of random points in a circle inscribed in a square is close to pi',
            content: 'needle sim content',
            github: "https://github.com/the42ndturtle/needle",
          },
          raycaster: {
            type: 'project',
            description: 'a rudimentary raycasting game engine like Wolfenstein 3D',
            content: 'raycaster content',
            github: "https://github.com/the42ndturtle/PatkerRay"
          },
          framebyframe: {
            type: 'project',
            description: 'a multiplayer game where players take turns drawing frames of one final animation',
            content: 'frame by frame content',
            github: "https://github.com/the42ndturtle/framebyframe"
          },
          vnengine: {
            type: 'project',
            description: 'a rudimentary visual novel game engine for web a mobile platforms',
            content: 'patker story content',
            github: "https://github.com/the42ndturtle/patkerstory"
          },
          rpg: {
            type: 'project',
            description: 'a simple rpg demonstration for a class',
            content: "patker quest content",
            github: "https://github.com/the42ndturtle/PatkerQuest64"
          },
          studyapp: {
            type: 'project',
            description: 'a flash card studying app where users could share information sets',
            content: 'study app content',
            github: "https://github.com/the42ndturtle/studyapp"
          },
          tetris: {
            type: 'project',
            description: 'a bad version of Tetris with a (hardly functional) lobby and multiplayer system',
            content: 'patker blocks content',
            github: "https://github.com/the42ndturtle/tetris"
          },
          life: {
            type: 'project',
            description: 'a recreation of "Conway\'s Game of Life" simulation',
            content: "life content",
            github: "https://github.com/the42ndturtle/life"
          },
          "PTC": {
            type: 'project',
            description: 'a bare bones trading card game featuring my friend parker\'s face on every card',
            content: 'PTC content',
            github: "https://github.com/the42ndturtle/PTC"
          },
          chat: {
            type: 'project',
            description: 'a demo chat program featuring emotes',
            content: 'patkerchat content',
            github: 'https://github.com/the42ndturtle/PatkerChat'
          },
          'TurtleIsleRPG': {
            type: 'project',
            description: 'an unfinished RPG made with a friend',
            content: "turtle isle rpg content",
            github: "https://github.com/the42ndturtle/TurtleIsleRPG"
          },
          'SpanishStudier': {
            type: 'project',
            description: 'a simple flash card app with voice detection for practicing Spanish',
            content: 'spanish studier content',
            github: "https://github.com/the42ndturtle/SpanishStudier"
          },

        },
        'about-me.txt': {
          type: 'file',
          content: "Hello! My name is Madeline! I am 19 and currently attending college at NC State university for Computer Science. I passionate about programming and video games, though I am bad at both! I have been programming since I was 11, and I am mainly self taught, though I've done my fair share of official stuff as well!"
        },
        experience: {
          type: 'dir',
          'unity-internship.txt': {
            type: 'file',
            content: 'I worked at an internship for Unity. I helped work on, produce, and quality check the "Create with Code" Unity course. It is the first official first party Unity course, and is intended to help introduce the basics of Unity and C#. During my work on the project I had to learn how to work with a team using a tool called Asana. My job was to go through the course in its entirety and double check everything, make changes, and fix errors, bugs, and spelling mistakes.'
          },
          'creative-internship.txt': {
            type: 'file',
            content: ''
          },
          'IMACS.txt': {
            type: 'file',
            content: '',
          },
          'summer-ventures.txt': {
            type: 'file',
            content: '',
          },
          'independant-study.txt': {
            type: 'file',
            content: '',
          },
          'teacher.txt': {
            type: 'file',
            content: '',
          }
        }
      },
      path: ['~'],
    }
  },
  methods: {
    handleCommand(){
      const command = this.$data.text.split(' ');

      this.printCommand();

      if(command[0] == 'ls'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        Object.keys(root).forEach(item => {
          if(root[item].type == 'dir') this.printDir(item)
          if(root[item].type == 'project') this.printProject(item)
          if(root[item].type == 'file') this.printFile(item);
        });
      }
      else if(command[0] == 'cd'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if(root[item].type == 'dir' && item == command[1]){
            this.$data.path.push(item)
            done = true;
          }
        });
        if(!done) this.print(`unknown directory ${command[1]}`);
      }
      else if(command[0] == 'cat'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if((root[item].type == 'file' || root[item].type == 'project') && item == command[1]){
            this.print(root[item].content);
            done = true;
          }
        });
        if(!done) this.print(`unrecognized legible file ${command[1]}`);
      }
      else if(command[0] == 'github'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if(root[item].type == 'project' && item == command[1]){
            console.log(this.$parent);
            this.$parent.$parent.createGithubWindow(root[item].github)
            this.print(`<a href="${root[item].github}">{{root[item].github}}</a>`);
            done = true;
          }
        });
        if(!done) this.print(`unrecognized project ${command[1]}`);
      }
      else if(command[0] == 'run'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if(root[item].type == 'project' && item == command[1] && root[item].link){
            this.$parent.$parent.pages.push(root[item].link)
            console.log(root[item].link);
            this.print(`running ${command[1]}`);
            done = true;
          }
        });
        if(!done) this.print(`unrecognized legible file ${command[1]}`);
      }
      else{
        this.print(`unrecognized command ${command[0]}`);
      }

      this.$data.text = '';
    },
    print(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <div class="term-text">${text}</div>
      `
    },
    printFile(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-text">${text}</span>
      `
    },
    printDir(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-text-dir">${text}</span>
      `
    },
    printProject(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-text-project">${text}</span>
      `
    },
    printCommand(){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <div class="term-username">madeline@madeline</span><span class="term-text">:${this.$data.path.join('/')}$ ${this.$data.text}</div>
      `
    },
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if(e.code == "Enter"){
        this.handleCommand();
      }
      else if(e.code == "Backspace"){
        this.$data.text = this.$data.text.substr(0, this.$data.text.length-1);
      }
      else if(e.key.length == 1){
        this.$data.text += e.key;
      }
    });
  },
  template: `
    <div class="term">
      <div class="term-wrapper">
        <div class="term-printed-wrapper">

        </div>
        <div><span class="term-username">madeline@madeline</span><span class="term-text">:{{path.join('/')}}$ {{text}}</span><span class="term-cursor">▮</span></div>
      </div>
    </div>
  `
});
