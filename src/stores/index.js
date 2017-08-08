/**
	Action : 描述发生了什么
	Reducers: 根据Action来更新 state;
	Store 将 Action 与 Reducers 联系起来;

	主要职责：
		维持应用的 state
		提供 getState() 获取 state
		dispatch(action) 方法更新 state
		subscribe(listener) 注册监听器
		subscribe(listener) 返回的函数注销监听器;

	Redux 应用只有一个单一的 Store;
**/