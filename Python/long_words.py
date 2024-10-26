def long_words(words):
    res = []
    for i in range(len(words)):
        if len(words[i]) > 5:
            res.append(words[i])
    return res

print(long_words(['bike','biker','skateboard','far','coffee']))
