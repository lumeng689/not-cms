<template>
  <panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="12">
          <router-link :to="{ path: 'userAdd'}">
            <el-button type="primary" icon="plus">新增</el-button>
          </router-link>
        </el-col>
        <el-col :span="12">
          <div class="el-input" style="width: 200px; float: right;">
            <i class="el-input__icon el-icon-search"></i>
            <input type="text" placeholder="输入用户名称" v-model="searchKey" @keyup.enter="search($event)"
                   class="el-input__inner">
          </div>
        </el-col>
      </el-row>
    </h3>
    <div slot="body">
      <el-table
        :data="tableData.rows"
        border
        style="width: 100%"
        v-loading="listLoading"
        @selection-change="handleSelectionChange">
        <el-table-column
          prop="id"
          type="selection"
          width="45">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="loginName"
          label="登录用户名">
        </el-table-column>
        <el-table-column
          prop="photo"
          label="照片">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column label="操作" width="285">
          <template scope="scope">
            <el-button
              size="small"
              type="default"
              icon="edit"
              @click="handleEdit(scope.$index, scope.row)">编辑




            </el-button>
            <el-button
              size="small"
              type="info"
              icon="setting"
              @click="handleRoleConfig(scope.$index, scope.row)">配置角色




            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除




            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableData.pagination.pageNo"
        :page-sizes="[5, 10, 20]"
        :page-size="tableData.pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.pagination.total">
      </el-pagination>
    </div>
  </panel>
</template>
<script>
  import Panel from '@/components/Panel.vue'

  export default {
    data () {
      return {
        currentRow: {},
        dialogVisible: false,
        dialogLoading: false,
        defaultProps: {
          children: 'children',
          label: 'name',
          id: 'id'
        },
        roleTree: [],
        listLoading: false,
        searchKey: '',
        tableData: {
          pagination: {
            total: 0,
            pageNo: 1,
            pageSize: 10,
            parentId: 0
          },
          rows: []
        }
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      search (target) {
        this.loadData()
      },
      handleSelectionChange (val) {

      },
      handleRoleConfig (index, row) {

      },
      loadData () {
        var d = {
          'offset': 0,
          'limit': 2147483647,
          'total': 1,
          'size': 10,
          'pages': 1,
          'current': 1,
          'searchCount': true,
          'optimizeCount': false,
          'orderByField': null,
          'records': [
            {
              'id': 1,
              'delFlag': 0,
              'companyId': 1,
              'officeId': 2,
              'loginName': 'admin',
              'password': '',
              'no': '0001',
              'name': '系统管理员',
              'email': 'lanux@foxmail.com',
              'phone': '731',
              'mobile': '13769999998',
              'userType': '1',
              'photo': null,
              'loginIp': '127.0.0.1',
              'loginDate': 1453188598000,
              'loginFlag': '1',
              'remarks': '最高管理员',
              'status': 1,
              'token': null
            }],
          'condition': {},
          'asc': true,
          'offsetCurrent': 0
        }
        this.tableData.rows = d.records
      }
    },
    components: {
      Panel
    },
    filters: {}
  }
</script>
<style scoped>
  .el-pagination {
    float: right;
    margin-top: 15px;
  }
</style>
