# How to update version

If the version is without breaking changes, no need to update the version in the package.json file. Also no need to update the npm package.

## Versioning via tags

The versioning is done via tags. The tags are in the format `vX.Y.Z`. The tags are created using the following command:

```bash
git tag -a vX.Y.Z -m "Version X.Y.Z"
git push origin vX.Y.Z
```

