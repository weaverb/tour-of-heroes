# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.provision "shell", path: "provision/bootstrap.sh"
  config.vm.network "private_network", ip: "10.100.199.200"
  #config.vm.network "forwarded_port", guest: 4200, host: 4200, auto_correct: true

  #config.vm.provision :ansible_local do |ansible|
  #  ansible.install_mode = :pip
  #  ansible.playbook = "provision/playbook.yml"
  #end
end
