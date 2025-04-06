# Getting Started

Start the robot container:

```sh
a2s run foxy
```

Inside the container make sure to build the workspace:

```sh
cd ~/foxy_robot_ws
colcon build --symlink-install
source install/setup.bash
```

launch a single robot simulation:

```sh
ros2 launch foxy_bringup single.launch.py
```

to get information on the launch arguments use (`-s` or `--show-args` or `--show-arguments`):

```sh
ros2 launch foxy_bringup single.launch.py -s
```

to test the manual control of the robot using the keyboard (assuming all default parameters):

```sh
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -r __ns:=/foxy -r cmd_vel:=diff_drive_base_controller/cmd_vel -p stamped:=true
```
