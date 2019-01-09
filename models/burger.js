module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  });
  return burger;
};


// CREATE TABLE burgers (
//   id int NOT NULL AUTO_INCREMENT,
//   burger_name varchar(255) NOT NULL,
//   devoured BOOL DEFAULT false,
//   PRIMARY KEY (id)
// );

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;
