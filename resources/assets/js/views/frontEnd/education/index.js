import { get } from '../../../helpers/api'
import router from '../../../router'

import { transJs } from '../../../helpers/transJs'
import langs from '../../../langs/customerJewellry'

export default {
		el: '#education',
		router,	
	data(){
		return {
			query:{
				per_page: 10,
			},
			langs,
			posts: [],
			chunkedItemsDesktop:{},
			chunkedItemsMobile:{},
			activedSubTab: 'carat',	
		}
	},
	watch:{
		'$route': 'fetchData'
	},
	beforeMount(){
		this.fetchData()

		if (this.$route.fullPath.includes('education-diamond-grading/gia-report/4cs')) {
			return this.activedSubTab = this.$route.fullPath.slice(45)?this.$route.fullPath.slice(45):'carat'
		}
		
		if (this.$route.fullPath.includes('education-diamond-grading/gia-report/')) {
			return this.activedSubTab = this.$route.fullPath.slice(41)?this.$route.fullPath.slice(41):'carat'
		}

	
		this.activedSubTab = this.$route.fullPath.slice(30)?this.$route.fullPath.slice(30):'carat'
	},
	computed:{
			locale(){
				
				if (this.$route.fullPath.slice(1,3) == 'en') {
					return 0
				}
				if (this.$route.fullPath.slice(1,3) == 'hk') {
					return 1
				}
				if (this.$route.fullPath.slice(1,3) == 'cn') {
					return 2
				}
			},

		},
	filters:{
			transJs,
	},
	methods:{
		activeSubTab(tab){
			this.activedSubTab = tab
		},
		more(){
				
					this.query.per_page  +=10
					this.fetchData()
				
			},
		chunkItems(){
				var chunk1 = []
				var chunk2 = []
				
				for (var i = 0; this.posts.data.length - 1 >= i ; ) {
					chunk1.push(this.posts.data.slice(i,i+4))
					i += 4
				}
				this.chunkedItemsDesktop = chunk1

				for (var i = 0; this.posts.data.length - 1 >= i ; ) {
					chunk2.push(this.posts.data.slice(i,i+2))
					i += 2
				}
				this.chunkedItemsMobile = chunk2

				return 
			},
		clickRow(row,index){
				this.onClickedRow = row.id
				window.open('customer-jewellries/'+row.id, '_self')
			},
		fetchData(){
			get(`/api/invPosts?per_page=${this.query.per_page}`, this.$route.fullPath.slice(1,3),)
			.then((res)=>{
				this.posts = res.data.posts
				this.chunkItems()
			})
		}
	}
}