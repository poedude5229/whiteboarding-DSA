def choosey_endings(words,suffix):
    res = []
    for i in range(len(words)):
        if words[i].endswith(suffix):
            res.append(words[i])
    return res

print(choosey_endings(['family','hounds','fly','timidly','farting'],'ly'))
