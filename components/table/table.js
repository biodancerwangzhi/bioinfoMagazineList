const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  attached: function() { 
    this.setData({
      filterData:this.data.originalData
    })
  },

  data: {
    inputShowed: false,
    inputVal: "",

    daIndex1: 0,
    daIndex2: 0,
    imageUrl1: "../../imgs/sort-desc.png",
    imageUrl2: "../../imgs/sort-desc.png",
    originalData: [
      { 'name': 'Nature', 'classification': '', 'score': 41.58, 'durTime': 6.5, 'difficulty': 'hard', 'comments':''},      
      { 'name': 'Nature Biotechnology', 'classification': '', 'score': 35.72, 'durTime': 2, 'difficulty': 'hard', 'comments': '' },      
      { 'name': 'Nature Genetics', 'classification': '', 'score': 27.13, 'durTime': 4.5, 'difficulty': 'hard', 'comments': '' },         
      { 'name': 'Genome Research', 'classification': '', 'score': 10.10, 'durTime': 1.5, 'difficulty': 'hard', 'comments': '' },    
      { 'name': 'Computational Molecular Science', 'classification': '', 'score': 8.84, 'durTime': 3, 'difficulty': 'hard', 'comments': '' },    
      { 'name': 'Molecular Systems Biology ', 'classification': '', 'score': 8.5, 'durTime': 3, 'difficulty': 'hard', 'comments': '' },          
              
      { 'name': 'Nuclear acid research', 'classification': 'Research article/Methodology article/Database issue', 'score': 10.16, 'durTime': 1, 'difficulty': 'hard', 'comments':'每年一月和七月特刊专门发数据库和web app。其他月份也可以发，更难。'},
      { 'name': 'BMC genomics', 'classification': 'Research article/Methodology article/Database issue/Software article', 'score': 3.792, 'durTime': 3, 'difficulty': 'middle', 'comments': true },
      { 'name': 'Database', 'classification': 'Database issue', 'score': 3.29, 'durTime': 2, 'difficulty': 'easy', 'comments': true },
      { 'name': 'Nuclear acid research', 'classification': 'Research article/Methodology article/Database issue', 'score': 10.16, 'durTime': 1, 'difficulty': 'hard', 'comments': true },
      { 'name': 'BMC genomics', 'classification': ' Research article/ Methodology article/ Database issue/ Software article', 'score': 3.792, 'durTime': 3, 'difficulty': 'middle', 'comments': true },
      { 'name': 'Database', 'classification': 'Database issue', 'score': 3.29, 'durTime': 2, 'difficulty': 'easy', 'comments': true },
      { 'name': 'BMC genomics', 'classification': 'Research article/Methodology article/Database issue/Software article', 'score': 3.792, 'durTime': 3, 'difficulty': 'middle', 'comments': true },
      { 'name': 'Database', 'classification': 'Database issue', 'score': 3.29, 'durTime': 2, 'difficulty': 'easy', 'comments': true },      
      { 'name': 'Database', 'classification': 'Database issue', 'score': 3.29, 'durTime': 2, 'difficulty': 'easy', 'comments': true },  
    ],
    filterData: [],
  
  },
   
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
    },
    sortField: function(field, ascend){
      if(ascend){
        return this.data.filterData.sort((a, b) => (a[field] > b[field]) ? 1 : -1)
      }
      return this.data.filterData.sort((a, b) => (a[field] < b[field]) ? 1 : -1)
    },
    sort1: function (e) {
      if (this.data.daindex1 == 0) {
        this.setData({
          imageUrl1: "../../imgs/sort-desc.png",
          daindex1: 1,
          filterData: this.sortField('score', false)
        })
      } else {
        this.setData({
          imageUrl1: "../../imgs/sort-asc.png",
          daindex1: 0,
          filterData: this.sortField('score', true)
        })
      }
    },
    sort2: function (e) {
      if (this.data.daindex2 == 0) {
        this.setData({
          imageUrl2: "../../imgs/sort-desc.png",
          daindex2: 1,
          filterData: this.sortField('durTime', false)
        })
      } else {
        this.setData({
          imageUrl2: "../../imgs/sort-asc.png",
          daindex2: 0,
          filterData: this.sortField('durTime', true)
        })
      }
    },
    filterQuery(queryString) {
      let filterResult = []
      for (let i = 0; i < this.data.originalData.length; i++) {
        if (this.data.originalData[i].name.substr(0, queryString.length).toUpperCase() == queryString.toUpperCase()) {      
          filterResult.push(this.data.originalData[i])
        }
      }
      return filterResult    
    },
        
  },

  watch: {
    'inputVal': function (val) {
      this.setData({
        filterData: this.filterQuery(val)
      })
    },
  },
})
