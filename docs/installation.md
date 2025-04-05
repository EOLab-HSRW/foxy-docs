# Installation

1. Install our container management system:

```sh
wget --show-progress --tries=1 -qO- https://raw.githubusercontent.com/harleylara/a2s-cli/refs/heads/main/install.sh | bash
```

2. Clone robot repo:

```sh
mkdir -p ~/foxy_robot_ws/src && cd ~/foxy_robot_ws/src
git clone https://github.com/EOLab-HSRW/foxy-robot/ && cd foxy-robot
```

3. Initialize the container:

```sh
a2s init foxy
```

Done.
