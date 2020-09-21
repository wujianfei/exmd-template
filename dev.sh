webpack --mode=development &&
# 迁移
cp ./build/app.js ./build/app &&
mv ./build/app/app.js ./build/app/index.js &&
cp ./build/swagger.js ./build/app-swagger &&
mv ./build/app-swagger/swagger.js ./build/app-swagger/index.js &&
# 删除
rm -rf ./build/app.js &&
rm -rf ./build/swagger.js &&
# 复制dist
rm -rf ./build/app-swagger/dist &&
cp -r ./node_modules/exmd-auxiliary/dist ./build/app-swagger &&
# 启动
cd ./build/app &&
sh run.sh
