root = "/home/deployer/apps/travelinsurance/current"
working_directory root
pid "#{root}/tmp/pids/unicorn.travelinsurance.pid"
stderr_path "#{root}/log/unicorn.travelinsurance.log"
stdout_path "#{root}/log/unicorn.travelinsurance.log"

listen "/tmp/unicorn.travelinsurance.sock"
worker_processes 2
timeout 30
