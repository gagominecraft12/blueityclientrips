local coolwaiting = 2
if coolwaiting86x then
    wait(1);
end
if coolwaiting64x then
    wait(0.85);
end
if coolwaiting32x then
    wait(0.50);
end

wait(coolwaiting);
file:write('./videomakerdata')
loadfile('./index.html');
if coolwaitingforandroidandiphone then
    -- body
    print('Please be patient to coolwait.');
    wait(3);
else
    -- body
    print('Please be patient to coolwait.');
    wait(5.2);
end