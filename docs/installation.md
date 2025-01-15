# Installation

## Fresh Install

1. Install the following system level packages:

```sh
sudo apt-get install -y git ansible
mkdir -p ~/foxy_robot_ws/src && cd ~/foxy_robot_ws/src
git clone https://github.com/EOLab-HSRW/foxy-robot/ && cd foxy-robot
```

> [!NOTE]
> Do not change the workspace name, as the internal tools will always search for the previously defined workspace.

2. The following command will configure everything for you, just enter your user password when it says BECOME password, and sit back and relax:

```sh
ansible-playbook local.yml --ask-become --tags developer
```

3. If everything runs smoothly, you only have to compile the workspace:

```sh
source /opt/ros/$ROS_DISTRO/setup.bash && cd ~/foxy_robot_ws && colcon build --symlink-install && source install/local_setup.bash
```

At this point everything is ready ✅.

## Custom Setup

In case that you already have the fox-robot software stack in your computer, you can just run a custom setup, for example to update the packages dependencies.

1. Follow just step (1) from [Fresh Install](#fresh-install).

The automation script allows using tags to execute only specific tasks, the available tags are the following:
- `developer`: setup everything to run the stack in the developer's computer.
- `robot`: setup everything to run the stack in the robot's computer.
- `tooling`: install some system level tools (e.g. tmux).
- `vcs`: pull all external repositories.
- `rosdep`: install all the packages dependencies.
- `env`: set environment variables, aliases and more at the system level.
- `ros`: install ros for you.

you can execute a single tag or a combination of multiple tags with the following command:

```sh
ansible-playbook local.yml --ask-become --tags "chosen_tag1, chosen_tag2, chosen_tag3"
```

for example if you want to install all the dependencies run:

```sh
ansible-playbook local.yml --ask-become --tags "rosdep, vcs"
```
