#! /usr/bin/env bash

NAME=$1

SOURCE_PATH="$(dirname "${BASH_SOURCE[0]}")/../src/packages"
cd "$SOURCE_PATH"
FILE_PATH="$(pwd)"

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: npm run gen \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
# mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/index.vue <<EOF
<template>
    <div>
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'T${NAME}',
    props: { },
    setup(props) {
        // init here
    },
});
</script>
<style scoped>
</style>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue';
import ${NAME} from './index.vue';

${NAME}.install = (app: App): void => {
    app.component(${NAME}.name, ${NAME});
};

export default ${NAME};
EOF

cat > $DIRNAME/package.json <<EOF
{
    "name": "@tiv/$INPUT_NAME",
    "version": "0.0.0",
    "main": "dist/index.js",
    "license": "MIT",
    "peerDependencies": {
        "vue": "^3.0.5"
    }
}
EOF
