

export const initialState = {
	filteredProducts:[],
	filteredTshirts:[],
	products:[{
    id: 'art_vp_001',
	category:'book',
    name: 'Book1',
    src: 'auth',
    price: 34.99,
	top:0,
	rating:[1,2]
      },
  {
    id: 'art_vp_002',
    name: 'Book2',
	category:'book',
    src: 'software',
    price: 24.99,
	top:1,
	rating:[1,2,3,4,5]
    
      },
  {
    id: 'art_vp_003',
    name: 'Book3',
	category:'book',
    src: 'disaster',
    price: 144.99,
	top:0,
	rating:[1,2]
    
      },
  {
    id: 'art_vp_004',
    name: 'Book4',
	category:'book',
    src: 'eng',
    price: 414.99,
	top:1,
	rating:[1,2,3,4]
    
    
  },
  {
    id: 'art_vp_005',
    name: 'Book5',
   category:'book',
    src: 'ese',
    price: 514.99,
	top:0,
	rating:[1,2]
    
    
  },
  {
    id: 'art_vp_006',
    name: 'Book6',
   category:'book',
    src: 'hindhi',
    price: 514.99,
	top:0,
	rating:[1,2]
    
    
  },
  {
    id: 'art_vp_007',
    name: 'Book7',
   category:'book',
    src: 'iot',
    price: 514.99,
	top:0,
	rating:[1,2,3]
    
    
  },
  {
    id: 'art_vp_008',
    name: 'Book9',
   category:'book',
    src: 'neme',
    price: 514.99,
	top:0,
	rating:[1,2]
    
    
  },
  {
    id: 'art_vp_009',
    name: 'Book9',
   category:'book',
    src: 'project',
    price: 514.99,
	top:0,
	rating:[1,2]
    
    
  },
  {
    id: 'art_vp_0010',
    name: 'Book10',
   category:'book',
    src: 'shant',
    price: 514.99,
	top:1,
	rating:[1,2,3,4]
    
    
  },
  {
    id: 'art_vp_0011',
    name: 'Book11',
    category:'book',
    src: 'software',
    price: 514.99,
	top:1,
	rating:[1,2,3,4,5]
    
    
  }],
   tshirts:[{
    	id: 'art1',
	category:'tshirts',
    name: 'tshirts1',
    src: 'black',
    price: 34.99,
	top:0,
	rating:[1,2]
      },
  {
    id: 'art2',
	category:'tshirts',
    name: 'tshirts2',
    src: 'blue',
    price: 35.99,
	top:0,
	rating:[1,2]
      },
  {
    id: 'art3',
	category:'tshirts',
    name: 'tshirts3',
    src: 'dev',
    price: 36.99,
	top:0,
	rating:[1,2]
    
      },
  {
    id: 'art4',
	category:'tshirts',
    name: 'tshirts4',
    src: 'github',
    price: 137.99,
	top:0,
	rating:[1,2]
    
  },
  {
    id: 'art5',
	category:'tshirts',
    name: 'tshirts1',
    src: 'grey',
    price: 234.99,
	top:1,
	rating:[1,2,3,4]
    
  },
  {
    id: 'art6',
	category:'tshirts',
    name: 'tshirts',
    src: 'mal',
    price: 346.99,
	top:1,
	rating:[1,2,3,4]
    
  },
  {
    id: 'art7',
	category:'tshirts',
    name: 'tshirts1',
    src: 'iot',
    price: 38.99,
	top:0,
	rating:[1,2]
    
  },
  {
    id: 'art8',
	category:'tshirts',
    name: 'tshirts1',
    src: 'orange',
    price: 134.99,
	top:0,
	rating:[1,2]
  },
  {
   id: 'art9',
	category:'tshirts',
    name: 'tshirts1',
    src: 'red',
    price: 44.99,
	top:0,
	rating:[1,2]    
  },
  {
    id: 'art10',
	category:'tshirts',
    name: 'tshirts1',
    src: 'white',
    price: 94.99,
	top:0,
	rating:[1,2]
    
  },
  {
    id: 'art11',
	category:'tshirts',
    name: 'tshirts1',
    src: 'yellow',
    price: 44.99,
	top:1,
	rating:[1,2,3,4]
  }]					 
};


const reducer = ( state, action ) => {
	
	function sortAsc(arr, field) {
						return arr.sort(function (a, b) {
						if (a[field] > b[field]) {
							   return 1;
						   }
						   if (b[field]> a[field]) {
							   return -1;
						   }
						   return 0;
					   })
					}
					
					
	function sortDesc(arr, field) {
			   return arr.sort(function (a, b) {
				   if (a[field] > b[field]) {
					   return -1;
				   }
				   if (b[field]> a[field]) {
					   return 1;
				   }
				   return 0;
			   })
			}
					
	
	switch( action.type ) {
		
		case 'FILTER_BY_PRICE':
		
					console.log(action.price.min)
					
						let filterProductPrice = [...state.filteredProducts]
					
						let filterProduct = filterProductPrice.filter(item=>
						(item.price >= action.price.min) && (item.price<= action.price.max)); 
						console.log("Test Value : " , ...filterProduct );

					
					return{
						...state,
							filteredProducts:filterProduct
						
					};	
		case 'FILTER_BY_PRICE_SHIRT':
		
					console.log(action.price.min)
					
						let filterTshirtPrice = [...state.filteredTshirts]
					
						let filterTshirt = filterTshirtPrice.filter(item=>
						(item.price >= action.price.min) && (item.price<= action.price.max)); 
						console.log("Test Value : " , ...filterTshirt );

					
					return{
						...state,
							filteredTshirts:filterTshirt
						
					};	


		case  'SORT_L_H':
						let forSorting = [...state.filteredProducts]
							   
							   
							   let sortedArr = action.order === "Price High to low" ?
									   sortDesc(forSorting, 'price') : action.order === "Price Low to High" ?
									   sortAsc(forSorting, 'price'): forSorting ;

								let sortedArr1 = action.order === "Price High to low" ?
									   sortDesc(forSorting, 'price') :
									   sortAsc(forSorting, 'price') ;
	

										
							   return {
								   ...state,
								   filteredProducts: sortedArr1
							   };
												
		case  'SORT_L_H_SHIRT':
						let forSortingT = [...state.filteredTshirts]
							   
							   
							   let sortedArrT = action.order === "Price High to low" ?
									   sortDesc(forSortingT, 'price') : action.order === "Price Low to High" ?
									   sortAsc(forSortingT, 'price'): forSorting ;

								let sortedArr1T = action.order === "Price High to low" ?
									   sortDesc(forSortingT, 'price') :
									   sortAsc(forSortingT, 'price') ;
	

										
							   return {
								   ...state,
								   filteredTshirts: sortedArr1T
							   };
					
					
					
		case 'LOAD_DATA':
	
				   let count = action.count;
				   let countPerPage =  9;

				   let totalPages = Math.ceil(count / countPerPage);
				   
				    const productsNew = [...state.products];
					  
					 console.log(productsNew,"new")

				   return {
					   ...state,
					   //All the products, unfiltered.
					   productsNew,
					   
					   filteredProducts: productsNew.slice(0, countPerPage),
					   currentCount: countPerPage,
					   countPerPage,
					   totalCount: count,
					   currentPage: 1,
					   //The total number of pages without any filters applied.
					   totalPages: totalPages,
					  
					   filteredPages: totalPages
				   };
				   
		case 'LOAD_DATA_SHIRT':
	
				   let countT = action.count;
				   let countPerPageT =  9;

				   let totalPagesT = Math.ceil(countT / countPerPageT);
				   
				    const productsNewT = [...state.tshirts];
					  
					 console.log(productsNewT,"new")

				   return {
					   ...state,
					   //All the products, unfiltered.
					   productsNewT,
					   
					   filteredTshirts: productsNewT.slice(0, countPerPage),
					   currentCountT: countPerPageT,
					   countPerPageT,
					   totalCountT: countT,
					   currentPageT: 1,
					   //The total number of pages without any filters applied.
					   totalPagesT: totalPagesT,
					  
					   filteredPagesT: totalPagesT
				   };


		case 'LOAD_NEW_PAGE':
		   //Clone the previous state
		   let loadNewPageState = Object.assign({}, state);
		  
		   let addPages = action.page;
		  
		   loadNewPageState.currentPage += addPages;

		   let perPage = loadNewPageState.countPerPage; 

		   let nextProducts;
		   if (addPages === 1){
			   
			   let upperCount = loadNewPageState.currentCount + perPage;
			   let lowerCount = loadNewPageState.currentCount; 
			   loadNewPageState.currentCount += loadNewPageState.countPerPage;
			   nextProducts = loadNewPageState.productsNew.slice(lowerCount, upperCount);
		   }

		   if (addPages ===-1){
			   //’currentCount’ has changed roles. Now it serves as the upperCount.
			   let upperCount = loadNewPageState.currentCount; 
			   let lowerCount = loadNewPageState.currentCount - perPage; 
			 
			   loadNewPageState.currentCount = lowerCount;
			   nextProducts = loadNewPageState.productsNew.slice(lowerCount - perPage, upperCount - perPage);
		   }

		   loadNewPageState.filteredProducts = nextProducts;
		   window.history.pushState({page: 1}, "title 1", `?page=${loadNewPageState.currentPage}`);
		   return loadNewPageState;
		   
		   
		 case 'LOAD_NEW_PAGE_SHIRT':
		   //Clone the previous state
		   let loadNewPageStateT = Object.assign({}, state);
		  
		   let addPagesT = action.page;
		  
		   loadNewPageStateT.currentPageT += addPagesT;

		   let perPageT = loadNewPageStateT.countPerPageT; 

		   let nextProductsT;
		   if (addPagesT === 1){
			   
			   let upperCountT = loadNewPageStateT.currentCountT + perPageT;
			   let lowerCountT = loadNewPageStateT.currentCountT; 
			   loadNewPageStateT.currentCountT += loadNewPageStateT.countPerPageT;
			   nextProductsT = loadNewPageStateT.productsNewT.slice(lowerCountT, upperCountT);
		   }

		   if (addPages ===-1){
			   //’currentCount’ has changed roles. Now it serves as the upperCount.
			   let upperCountT = loadNewPageStateT.currentCountT; 
			   let lowerCountT = loadNewPageStateT.currentCountT - perPageT; 
			 
			   loadNewPageStateT.currentCountT = lowerCountT;
			   nextProductsT = loadNewPageStateT.productsNewT.slice(lowerCountT - perPageT, upperCountT - perPageT);
		   }

		   loadNewPageStateT.filteredTshirts = nextProductsT;
		   window.history.pushState({page: 1}, "title 1", `?page=${loadNewPageStateT.currentPageT}`);
		   return loadNewPageStateT;
		
		   
		 case 'LOAD_EXACT_PAGE':
			   const exactPageState = Object.assign({}, state);
			   const exactPage = action.page;
			   let upperCountExact = exactPageState.countPerPage * exactPage;
			   let lowerCountExact = upperCountExact - exactPageState.countPerPage;

			   let exactProducts = exactPageState.productsNew.slice(lowerCountExact, upperCountExact);
			   exactPageState.filteredProducts = exactProducts;
			   exactPageState.currentCount = upperCountExact;
			   exactPageState.currentPage = exactPage;
			   window.history.pushState({page: 1}, "title 1", `?page=${exactPageState.currentPage}`);

			   return exactPageState; 
				
		case 'LOAD_EXACT_PAGE_SHIRT':
			   const exactPageStateT = Object.assign({}, state);
			   const exactPageT = action.page;
			   let upperCountExactT = exactPageStateT.countPerPageT * exactPageT;
			   let lowerCountExactT = upperCountExactT - exactPageStateT.countPerPageT;

			   let exactProductsT = exactPageStateT.productsNewT.slice(lowerCountExactT, upperCountExactT);
			   exactPageStateT.filteredTshirts = exactProductsT;
			   exactPageStateT.currentCountT = upperCountExactT;
			   exactPageStateT.currentPageT = exactPageT;
			   window.history.pushState({page: 1}, "title 1", `?page=${exactPageStateT.currentPageT}`);

			   return exactPageStateT;  
		
																
		case 'ADD_PRODUCT': 
						console.log(action.data,"reducer");
						return {
								...state,
								filteredProducts: [ ...state.filteredProducts,action.data]
								
							}
							
		case 'ADD_PRODUCT_SHIRT': 
						console.log(action.data,"reducer");
						return {
								...state,
								filteredTshirts: [ ...state.filteredTshirts,action.data]
								
							}
		
				
		default: return state;
	
	} 
}

export default reducer;