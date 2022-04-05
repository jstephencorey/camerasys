# Build
echo "Beginning script"
# pushd front-end      
# rm -rf public/images/   
# npm run build  
# popd   

printf "%s" $(date +%F-%T) > back_end/version.txt

# Copy to production
# ssh -i /mnt/c/Users/corey_vvfjb4e/.ssh/id_rsa root@josephcorey.net 'mkdir -p /var/www/camera/front_end/public/images' 
# scp -i /mnt/c/Users/corey_vvfjb4e/.ssh/id_rsa -r front_end/dist/* root@josephcorey.net:/var/www/camera/front_end/public

ssh -i /mnt/c/Users/corey_vvfjb4e/.ssh/id_rsa root@josephcorey.net 'mkdir -p /var/www/camera/back_end' 
scp -i /mnt/c/Users/corey_vvfjb4e/.ssh/id_rsa back_end/*.js back_end/*.json back_end/version.txt root@josephcorey.net:/var/www/camera/back_end/
ssh -i /mnt/c/Users/corey_vvfjb4e/.ssh/id_rsa root@josephcorey.net 'cd /var/www/camera/back_end; npm install' 

# # Test it is running
ssh -i /mnt/c/Users/corey_vvfjb4e/.ssh/id_rsa root@josephcorey.net "curl -i -s localhost:5000/api/version; printf '\n---------\n'"

# Check out the result

# # ssh -i C:\Users\corey_vvfjb4e\.ssh\id_rsa root@josephcorey.net