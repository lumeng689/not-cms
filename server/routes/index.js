import {Router} from 'express'
import SETTINGS from '../config/settings'
let router = Router()

/**
 * 网站主页
 */
router.get('/', function (req, res, next) {
  res.render('home')
})

/**
 * 获取商品详情
 */
router.get('/detail/:id', function (req, res, next) {
  res.render('detail')
})

/**
 * 获取API详情
 */
router.get('/api-detail/:id', function (req, res, next) {
  res.render('api-detail')
})

/**
 * 搜索产品
 */
router.post('/search/', function (req, res, next) {
  res.render('list', {keywords: req.body.keywords})
})

/** 以下为menu 数据**/

/**
 * 基础软件
 */
router.get('/software/', function (req, res, next) {
  res.render('category', {categoryId: SETTINGS.CATEGORY_SOFTWARE_ID})
})

/**
 * 基础设施服务
 */
router.get('/infrastructure/', function (req, res, next) {
  res.render('category', {categoryId: SETTINGS.CATEGORY_INFRASTRUCTURE_ID})
})

/**
 * 开发软件
 */
router.get('/development/', function (req, res, next) {
  res.render('category', {categoryId: SETTINGS.CATEGORY_DEVELOPMENT_ID})
})

/**
 * 企业应用
 */
router.get('/enterprise/', function (req, res, next) {
  res.render('category', {categoryId: SETTINGS.CATEGORY_ENTERPRISE_ID})
})

/**
 * AI
 */
router.get('/ai/', function (req, res, next) {
  res.render('category')
})

/**
 * 我的应用
 */
router.get('/account/', function (req, res, next) {
  res.render('account')
})

export default router
