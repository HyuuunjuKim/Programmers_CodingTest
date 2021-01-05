def isOneWordDifferent(word1, word2) :
    sum = 0
    for a, b in zip(word1, word2) :
        if a != b :
            sum += 1
    if sum == 1 :
        return True
    else :
        return False
def dfs(begin, path, words, target, paths_length) :
    if begin == target :
        paths_length.append(len(path)-1)
    for w in words :
        if isOneWordDifferent(begin, w) :
            copy_path = path[:]
            copy_path.append(w)
            copy_words = words[:]
            copy_words.remove(w)
            dfs(w, copy_path, copy_words, target, paths_length)
def solution(begin, target, words):
    # 변환할 수 없는 경우
    if target not in words :
        return 0
    path = [begin]
    paths_length = []
    dfs(begin, path, words, target, paths_length)
    
    return min(paths_length)