#!/bin/bash

# Create main app structure
mkdir -p app/{public,dashboard,org,referee,admin}

# Create shared directories
mkdir -p components/{header,footer,navigation,cards,forms,layouts}
mkdir -p lib/{utils,hooks,api,types}
mkdir -p styles
mkdir -p public/{images,icons,fonts}

echo "Folder structure created successfully!"
