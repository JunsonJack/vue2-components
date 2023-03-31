<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      :label-width="data.width"
    >
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        v-for="(item, index) in data.items"
        :key="index"
      >
        <!-- 输入框 -->
        <el-input
          v-model="ruleForm[item.prop]"
          v-if="item.type == 'Input'"
          :style="{ width: item.width }"
          :placeholder="item.placeholder"
        >
        </el-input>
        <!-- 输入框 -->
        <el-input
          v-model="ruleForm[item.prop]"
          v-if="item.type == 'Input1'"
          :style="{ width: item.width }"
          :placeholder="item.placeholder"
        >
        </el-input>
        <!-- 选择 -->
        <el-select
          v-model="ruleForm[item.prop]"
          v-if="item.type == 'Select'"
          :placeholder="item.placeholder"
        >
          <el-option
            :label="o.label"
            :value="o.value"
            v-for="(o, i) in item.options"
            :key="i"
          ></el-option>
        </el-select>

        <el-switch
          v-model="ruleForm[item.prop]"
          v-if="item.type == 'Switch'"
        ></el-switch>
        <!-- 多选 -->
        <el-checkbox-group
          v-model="ruleForm[item.prop]"
          v-if="item.type == 'Checkbox'"
        >
          <el-checkbox
            :label="o.value"
            v-for="(o, i) in item.options"
            :key="i"
            >{{ o.label }}</el-checkbox
          >
        </el-checkbox-group>

        <!-- 单选 -->
        <el-radio-group
          v-model="ruleForm[item.prop]"
          v-if="item.type == 'Radio'"
        >
          <el-radio :label="o.value" v-for="(o, k) in item.options" :key="k">{{
            o.label
          }}</el-radio>
        </el-radio-group>
        <!-- textarea -->
        <el-col :span="item.span || 24">
          <el-input
            type="textarea"
            v-model="ruleForm[item.prop]"
            v-if="item.type == 'Textarea'"
            :placeholder="item.placeholder"
          >
          </el-input>
        </el-col>

        <!-- 开始结束 活动时间 -->
        <el-col :span="item.span || 5">
          <el-date-picker
            type="date"
            :placeholder="item.placeholder"
            v-model="ruleForm[item.prop]"
            v-if="item.type == 'Date'"
            style="width: 100%"
          ></el-date-picker>
        </el-col>

        <el-col :span="item.span || 5">
          <el-date-picker
            type="date"
            :placeholder="item.placeholder"
            v-model="ruleForm[item.prop]"
            v-if="item.type == 'Time'"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <!--活动时间  -->
        <el-col :span="item.span || 5">
          <el-date-picker
            type="datetime"
            :placeholder="item.placeholder"
            v-model="ruleForm[item.prop]"
            v-if="item.type == 'DateTime'"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <!-- 提交按钮 -->
      <el-form-item>
        <el-button
          :type="o.type"
          @click="callSelf('ruleForm', o.action, o.call)"
          v-for="(o, k) in data.buttons"
          :key="k"
        >
          {{ o.label }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { debounce } from '../utils/delay'
export default {
  name: 'selfform',
  props: {
    data: Object,
  },
  data() {
    return {
      ruleForm: {},
      rules: {},
    }
  },
  methods: {
    callSelf: debounce(
      function (formName, action, callback) {
        if (action == "submit") {
          this.submitForm(formName, callback)
        } else if (action == "reset") {
          this.resetForm(formName, callback)
        } else {
          callback && callback()
        }
      }, 1000),
    submitForm(formName, callback) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!")
          callback && callback(this.ruleForm)
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName, callback) {
      callback()
      this.$refs[formName].resetFields()
    },
    init() {
      let form = {}
      let box = []
      this.data.items.forEach(item => {
        switch (item.type) {
          case 'Checkbox':
            if (item.default) {
              if (Array.isArray(item.default)) {
                box = box.concat(item.default)
              } else {
                box.push(item.default)
              }
            }
            form[item.prop] = box
            break
          case "Date":
          case "Time":
          case "DateTime":
            if (item.default) {
              form[item.prop] = new Date(item.default)
            }
            break
          default:
            form[item.prop] = item.default
            break
        }
      })
      this.ruleForm = form
      this.rules = this.data.rules
    },
    func(formName, action, call) {
      // 'ruleForm', o.action, o.call
      // this.$throttle(this.callSelf(formName,action,call),2000);
    }
  },
  created() {
    this.init()
  },

};
</script>

<style lang="scss" scoped>
</style>