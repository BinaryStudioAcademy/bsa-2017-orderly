import R from 'ramda'

const findCurrentView = (viewId, views) =>
	R.compose(R.find(R.propEq('_id', viewId)), R.pluck('view'))(views)




export {
	findCurrentView
}