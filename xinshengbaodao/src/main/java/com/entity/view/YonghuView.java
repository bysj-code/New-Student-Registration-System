package com.entity.view;

import com.entity.YonghuEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;

/**
 * 学生
 * 后端返回视图实体辅助类
 * （通常后端关联的表或者自定义的字段需要返回使用）
 */
@TableName("yonghu")
public class YonghuView extends YonghuEntity implements Serializable {
    private static final long serialVersionUID = 1L;

		/**
		* 性别的值
		*/
		private String sexValue;
		/**
		* 报到状态的值
		*/
		private String yonghuValue;
		/**
		* 专业的值
		*/
		private String zhuanyeValue;



	public YonghuView() {

	}

	public YonghuView(YonghuEntity yonghuEntity) {
		try {
			BeanUtils.copyProperties(this, yonghuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



			/**
			* 获取： 性别的值
			*/
			public String getSexValue() {
				return sexValue;
			}
			/**
			* 设置： 性别的值
			*/
			public void setSexValue(String sexValue) {
				this.sexValue = sexValue;
			}
			/**
			* 获取： 报到状态的值
			*/
			public String getYonghuValue() {
				return yonghuValue;
			}
			/**
			* 设置： 报到状态的值
			*/
			public void setYonghuValue(String yonghuValue) {
				this.yonghuValue = yonghuValue;
			}
			/**
			* 获取： 专业的值
			*/
			public String getZhuanyeValue() {
				return zhuanyeValue;
			}
			/**
			* 设置： 专业的值
			*/
			public void setZhuanyeValue(String zhuanyeValue) {
				this.zhuanyeValue = zhuanyeValue;
			}










}
