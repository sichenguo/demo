## sequelite
  * dataTypes
```
https://segmentfault.com/a/1190000015942694 参考链接

Sequelize.STRING         //字符串,长度默认255,VARCHAR(255)
Sequelize.STRING(1234)  //设定长度的字符串,VARCHAR(1234)
Sequelize.STRING.BINARY   //定义类型VARCHAR BINARY
Sequelize.TEXT           //长字符串,文本 TEXT
Sequelize.TEXT('tiny')   //小文本字符串,TINYTEXT

Sequelize.INTEGER      //int数字,int
Sequelize.BIGINT       //更大的数字,BIGINT
Sequelize.BIGINT(11)   //设定长度的数字,BIGINT(11)

Sequelize.FLOAT        //浮点类型,FLOAT
Sequelize.FLOAT(11)     //设定长度的浮点,FLOAT(11)
Sequelize.FLOAT(11, 12)  //设定长度和小数位数的浮点,FLOAT(11,12)

Sequelize.REAL     //REAL  PostgreSQL only.
Sequelize.REAL(11) // REAL(11)    PostgreSQL only.
Sequelize.REAL(11, 12)  // REAL(11,12) PostgreSQL only.

Sequelize.DOUBLE     // DOUBLE
Sequelize.DOUBLE(11)  // DOUBLE(11)
Sequelize.DOUBLE(11, 12) // DOUBLE(11,12)

Sequelize.DECIMAL     // DECIMAL
Sequelize.DECIMAL(10, 2)  // DECIMAL(10,2)

Sequelize.DATE    // 日期类型,DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
Sequelize.DATE(6) // mysql 5.6.4+支持,分秒精度为6位
Sequelize.DATEONLY   // 仅日期部分
Sequelize.BOOLEAN   // int类型,长度为1,TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // 枚举类型
Sequelize.ARRAY(Sequelize.TEXT)  //PostgreSQL only.
Sequelize.ARRAY(Sequelize.ENUM)  //  PostgreSQL only.

Sequelize.JSON   // JSON column. PostgreSQL, SQLite and MySQL only.
Sequelize.JSONB  // JSONB column. PostgreSQL only.

Sequelize.BLOB   // BLOB (bytea for PostgreSQL)
Sequelize.BLOB('tiny')  // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)

Sequelize.UUID  // PostgreSQL和SQLite的数据类型是UUID, MySQL是CHAR(36)类型

Sequelize.CIDR  // PostgreSQL中的CIDR类型
Sequelize.INET   // PostgreSQL中的INET类型
Sequelize.MACADDR  // PostgreSQL中的MACADDR类型

Sequelize.RANGE(Sequelize.INTEGER)    //PostgreSQL only.
Sequelize.RANGE(Sequelize.BIGINT)     // PostgreSQL only.
Sequelize.RANGE(Sequelize.DATE)       //PostgreSQL only.
Sequelize.RANGE(Sequelize.DATEONLY)   //PostgreSQL only.
Sequelize.RANGE(Sequelize.DECIMAL)    //PostgreSQL only.

Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // PostgreSQL only.

Sequelize.GEOMETRY   //PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT')  // PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT', 4326)// PostgreSQL (with PostGIS) or MySQL only.
```
```
| 日期时间类型 | 占用空间 | 日期格式            | 最小值              | 最大值              | 零值表示            |
| ------------ | -------- | ------------------- | ------------------- | ------------------- | ------------------- |
| DATETIME     | 8 bytes  | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 | 9999-12-31 23:59:59 | 0000-00-00 00:00:00 |
| TIMESTAMP    | 4 bytes  | YYYY-MM-DD HH:MM:SS | 19700101080001      | 2038 年的某个时刻   | 00000000000000      |
| DATE         | 4 bytes  | YYYY-MM-DD          | 1000-01-01          | 9999-12-31          | 0000-00-00          |
| TIME         | 3 bytes  | HH:MM:SS            | -838:59:59          | 838:59:59           | 00:00:00            |
| YEAR         | 1 bytes  | YYYY                | 1901                | 2155                | 0000                |


```
  * DATETIME
    * DATETIME 用于表示 年月日 时分秒，是 DATE 和 TIME 的组合，并且记录的年份（见上表）比较长久。如果实际应用中有这样的需求，就可以使用 DATETIME 类型。
  * TIMESTAMP
    * TIMESTAMP 用于表示 年月日 时分秒，但是记录的年份（见上表）比较短暂。
    * TIMESTAMP 和时区相关，更能反映当前时间。当插入日期时，会先转换为本地时区后再存放；当查询日期时，会将日期转换为本地时区后再显示。所以不同时区的人看到的同一时间是  不一样的。
    * 表中的第一个 TIMESTAMP 列自动设置为系统时间（CURRENT_TIMESTAMP）。当插入或更新一行，但没有明确给 TIMESTAMP 列赋* 值，也会自动设置为当前系统时间。如果表中有第二个 TIMESTAMP 列，则默认值设置为0000-00-00 00:00:00。
    * 如果记录的日期需要让不同时区的人使用，最好使用 TIMESTAMP。
  * DATE
    * DATE 用于表示 年月日，如果实际应用值需要保存 年月日 就可以使用 DATE。
  * TIME
    * TIME 用于表示 时分秒，如果实际应用值需要保存 时分秒 就可以使用 TIME。
  * YEAR
    * YEAR 用于表示 年份，YEAR 有 2 位（最好使用4位）和 4 位格式的年。 默认是4位。如果实际应用只保存年份，那么用 1 bytes 保存 YEAR 类型完全可以。不但能够节约存储空间，还能提高表的操作效率
  * https://www.cnblogs.com/zbseoag/archive/2013/03/19/2970004.html mysql 数据类型



```sql

DROP TABLE IF EXISTS `pms_project`;
CREATE TABLE `pms_project` (
`id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
`type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'sprint',
`name` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`code` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`begin` date NULL DEFAULT NULL,
`end` date NULL DEFAULT NULL,
`days` smallint(5) UNSIGNED NULL DEFAULT NULL,
`status` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`statge` enum('1','2','3','4','5') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1',
`pri` enum('1','2','3','4') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1',
`desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`access_control_type` enum('open','private','custom') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'open' COMMENT '访问控制 l 类型',
`white_list` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '可以访问项目的权限组（白名单）',
`order` mediumint(8) UNSIGNED NULL DEFAULT NULL,
`deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
`level_id` int(11) NULL DEFAULT 1,
`team_id` int(11) NULL DEFAULT 0,
`test_message` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`test_ftp` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`online_message` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`online_ftp` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`other_message` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`leader_id` int(11) NULL DEFAULT 0,
`business_id` int(11) NULL DEFAULT 0,
`type_id` int(11) NULL DEFAULT 0 COMMENT '项目类型',
`ticket` tinyint(2) NULL DEFAULT 0,
`schedule` double(11, 2) NULL DEFAULT 0.00,
`prepayDate` date NULL DEFAULT NULL,
`project_desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
`createDate` datetime(0) NULL DEFAULT NULL,
PRIMARY KEY (`id`) USING BTREE,
INDEX `project`(`begin`, `end`, `status`, `order`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1298 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '项目表' ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for pms_task
-- ----------------------------
DROP TABLE IF EXISTS `pms_task`;
CREATE TABLE `pms_task`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pri` tinyint(3) UNSIGNED NOT NULL DEFAULT 3,
  `status` enum('wait','doing','done','pause','cancel','closed') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'wait',
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `openedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `openedDate` datetime(0) NOT NULL,
  `assignedTo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `task_type` int(11) NULL DEFAULT 1 COMMENT '任务类型',
  `task_tag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `execute_state` tinyint(2) NULL DEFAULT 0,
  `task_state` tinyint(2) NULL DEFAULT 0,
  `end_time` datetime(0) NULL DEFAULT NULL,
  `remind_time` datetime(0) NULL DEFAULT NULL COMMENT '提醒时间',
  `pid` int(11) NULL DEFAULT 0 COMMENT '父任务id',
  `sort` int(11) NULL DEFAULT 0 COMMENT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `task`(`project`, `assignedTo`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12184 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '任务表' ROW_FORMAT = Dynamic;
```